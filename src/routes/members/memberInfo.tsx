import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils/apiInstance';
import SubHeader from '../../components/common/SubHeader';
import { ReactComponent as MoreVert } from '../../assets/icons/MoreVert.svg';
import { ReactComponent as Document } from '../../assets/icons/Document.svg';
import { ReactComponent as Message } from '../../assets/icons/Message.svg';
import { ReactComponent as Profile40 } from '../../assets/icons/Profile_40.svg';
import { ReactComponent as Edit } from '../../assets/icons/Edit.svg';
// import MemberInformation from '../../components/members/MemberInformation';
import MemberRecord from '../../components/members/MemberRecord';
import MemberReview from '../../components/members/MemberReview';
import MemberAlbum from '../../components/members/MemberAlbum';
import { MembersDetail } from '../../types/members/membersDetail';

type TabType = 'record' | 'review' | 'album';

const MemberInfo = () => {
  const [activeTab, setActiveTab] = useState<TabType>('record');

  // 이용중인 수강권 보는 페이지로
  const navigate = useNavigate();
  const goMainMembers = () => {
    navigate('/tickets/useTickets');
  };

  const { memberId } = useParams<{ memberId: string }>();
  const [memberDetail, setMemberDetail] = useState<MembersDetail | null>(null);
  const getMemberDatail = async () => {
    const res = await axiosInstance.get(`members/${memberId}`);
    setMemberDetail(res.data);
  };

  useEffect(() => {
    getMemberDatail();
  }, []);

  const memberInformation = [
    { id: 1, label: '이름', value: memberDetail?.name },
    { id: 2, label: '생년월일', value: memberDetail?.birthDate },
    { id: 3, label: '등록일', value: memberDetail?.createdAt.split('T')[0] },
    { id: 4, label: '성별', value: memberDetail?.sex === 'MALE' ? '남' : '여' },
    { id: 5, label: '전화번호', value: memberDetail?.phone },
    { id: 6, label: '직업형태', value: memberDetail?.job },
  ];

  return (
    <>
      <SubHeader
        title="회원 정보"
        rightBtn={
          <button type="button">
            <MoreVert />
          </button>
        }
      />
      <div className="flex justify-between">
        <h1 className="main-title">회원 정보</h1>
        <div className="flex items-center">
          <button type="button" className="flex mr-4" onClick={goMainMembers}>
            수강권 / 계약서
            <Document />
          </button>
          <button type="button" className="flex">
            퍼스널 레포트 보내기
            <Message />
          </button>
        </div>
      </div>
      <section className="flex items-center justify-between p-4 border-2 rounded-xl ">
        <div className="flex items-center">
          <Profile40 />
          {memberInformation.map((info) => (
            <React.Fragment key={info.id}>
              <p className="ml-5 text-text-400">{info.label}</p>
              <p className="ml-2">{info.value}</p>
            </React.Fragment>
          ))}
        </div>
        <Edit />
      </section>
      <section className="mt-8">
        <div className="flex border-b tabs border-line-300">
          <button
            type="button"
            className={`flex-1 py-2 px-4 ${activeTab === 'record' ? 'border-b-2 border-blue-500' : 'hover:bg-blue-50'}`}
            onClick={() => setActiveTab('record')}>
            기록지
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 ${activeTab === 'review' ? 'border-b-2 border-blue-500' : 'hover:bg-blue-50'}`}
            onClick={() => setActiveTab('review')}>
            만족도 및 후기
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 ${activeTab === 'album' ? 'border-b-2 border-blue-500' : 'hover:bg-blue-50'}`}
            onClick={() => setActiveTab('album')}>
            앨범
          </button>
        </div>

        {activeTab === 'record' && <MemberRecord />}
        {activeTab === 'review' && <MemberReview />}
        {activeTab === 'album' && <MemberAlbum />}
      </section>
    </>
  );
};

export default MemberInfo;
