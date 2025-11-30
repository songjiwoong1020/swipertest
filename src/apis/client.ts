export type ParticipateMemberParams = {
  eventPid: string;
  name: string;
  password: string;
};

//임시
export const transFormData = (data: Record<string, string>) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

//일정리스트
// eventDate string ('2025-10')
export const getEventList = async (eventDate: string) => {
  transFormData({ eventDate });
  const response = await fetch('http://keonhee.synology.me/rest/dsfootball/getEventList', {
    body: eventDate,
    method: 'POST',
  });
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
