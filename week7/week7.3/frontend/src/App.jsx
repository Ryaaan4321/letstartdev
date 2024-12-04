import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  charCountState,
  notifications,
  textState,
  totalNotificationSelector,
} from "./atom";
import { useMemo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <SelfLearning />
      </RecoilRoot>
    </>
  );
}

// function MainApp() {
//   console.log("main app is called");
//   const networkNotification = useRecoilValue(networkAtom);
//   const jobcount = useRecoilValue(jobAtom);
//   const Notificationcount = useRecoilValue(notificationAtom);
//   const messagecount = useRecoilValue(messagingAtom);

//   const totalNotification = useMemo(() => { // i can do the same thing witht the selector also so lets see
//     // the syntax of that also
//     return jobcount + Notificationcount + networkNotification + messagecount;
//   }, [jobcount, messagecount, Notificationcount, networkNotification]);

//   const totalNotificationUsingSelector=useRecoilValue(totalNotificationSelector);// using the selector check the atom.jsx
//   return (
//     <>
//       <button>Home</button>
//       <button>My network {networkNotification}+</button>
//       <button>Jobs {jobcount}</button>
//       <button>Notification {Notificationcount}</button>
//       <button>Messaging {messagecount}</button>
//       <button>Me {totalNotificationUsingSelector}</button>
//     </>
//   );
// }

// function ButtonUpdater() {
//   const [messagecount,setmessagecount] = useRecoilState(messaging);
//   return (
//     <div>
//       <button>Messaging {messagecount}</button>
//       <button
//         onClick={() => {
//           setmessagecount((c) => c + 1);
//         }}
//       >
//         Me
//       </button>
//     </div>
//   );
// }

function SelfLearning() {
  return (
    <>
      Hello from the self Learning
      <TextInput />
      <CharacterCount />
    </>
  );
}



function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
function CharacterCount() {
  const count = useRecoilValue(charCountState); // Get the computed character count

  return <p>Character Count: {count}</p>;
}

export default App;
