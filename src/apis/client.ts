export type GetEventListParams = {
  eventDate: string;
};

export type GetParticipateMemberListParams = {
  eventPid: string;
};

export type ParticipateMemberParams = {
  eventPid: string;
  name: string;
  password: string;
};

//일정리스트
// eventDate string ('2025-10')
export const getEventList = async ({ eventDate }: GetEventListParams) => {
  const response = await fetch('test', { body: eventDate });
  return response;
};

//일정 참여자 리스트
// eventPid	string ('1')
const getParticipateMemberList = () => {};

//일정 참여하기
//eventPid string ('1')
//name string ('ddd')
//password string ('123')
const saveParticipateMember = () => {};

//일정 취소하기
//eventPid string ('1')
//name string ('ddd')
//password string ('123')
const deleteParticipateMember = () => {};
