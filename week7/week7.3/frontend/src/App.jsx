import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { jobAtom, messaging, networkAtom, notification } from "./atom";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
        <ButtonUpdater />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  console.log("main app is called");
  const networkNotification = useRecoilValue(networkAtom);
  const jobcount = useRecoilValue(jobAtom);
  const Notificationcount = useRecoilValue(notification);

  return (
    <>
      <button>Home</button>
      <button>My network {networkNotification}+</button>
      <button>Jobs {jobcount}</button>
      <button>Notification {Notificationcount}</button>
    </>
  );
}
function ButtonUpdater() {
  const [messagecount,setmessagecount] = useRecoilState(messaging);
  return (
    <div>
      <button>Messaging {messagecount}</button>
      <button
        onClick={() => {
          setmessagecount((c) => c + 1);
        }}
      >
        Me
      </button>
    </div>
  );
}

export default App;
