import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

// 1. 박스 2개
// 2. 타이틀
// 3. 결과
// 4. 가위 바위 보 버튼
// 5. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 컴퓨터는 랜덤하게 아이템 선택이 된다
// 누가 이겼는지 승패를 따짐

// 이기면 초록, 지면 빨강 비기면 검정

const choice = {
  rock: {
    name: "Rock",
    img: "public/rock.png",
  },
  scissors: {
    name: "Scissors",
    img: "public/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "public/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(""); // user 입장
  const [computerResult, setComputerResult] = useState(""); // 컴퓨터 입장

  const play = (userChoice) => {
    //console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    judgement(choice[userChoice], computerChoice);
  };

  // user 입장에서
  const judgement = (user, computer) => {
    // console.log(user, computer);

    if (user.name == computer.name) {
      setResult("TIE");
      setComputerResult("TIE");
    } else if (
      (user.name == "Rock" && computer.name == "Scissors") ||
      (user.name == "Scissors" && computer.name == "Paper") ||
      (user.name == "Paper" && computer.name == "Rock")
    ) {
      setResult("win");
      setComputerResult("LOSE");
    } else {
      setResult("LOSE");
      setComputerResult("WIN");
    }

    // 키가 같으면 비김
    // 컴퓨터 키 값이 더크면 컴퓨터가 이김
    // 유저 키 값이 더 크면 유저가 이김 ?
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키 값만 뽑아서
    //console.log(itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    //console.log(randomItem);

    let final = itemArray[randomItem];
    /// console.log(final);

    return choice[final];
  };

  return (
    <div>
      <div className="main1">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>

      <div className="main2">
        <button onClick={() => play("scissors")} title="가위">
          ✂️
        </button>
        <button onClick={() => play("rock")} title="바위">
          ✊
        </button>
        <button onClick={() => play("paper")} title="보">
          ✋
        </button>
      </div>
    </div>
  );
}

export default App;
