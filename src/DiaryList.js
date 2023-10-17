import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

//if App.js 에서 <DiaryList diaryList={dummyList} /> dummyList => undefined 로 잘못지어 에러가 발생시

// DiaryList.defaultProps={
//   diaryList:[]
// }

//위는 빈배열로 설정
//defaultProps 기능 사용 => undefined로 전달될 것 같은 props 들을 기본값으로 설정할 수 있는 기능

export default DiaryList;
