import { atom, selector } from 'recoil';


export const notifications=atom({
    key:"notificationSelector",
    default:selector({
        key:"networkAtomSelector",
        get:async()=>{
            const res=await axios.get('http//somebackendrequest.com'); // so thats how i can get rid of fetching the data on the main page 
            // becuase when we are fetching the data in the main page it makes the whole page rerender that can increase our website load time or render time
            // so instead of that we are here fetching the data and providing it to the places where it is needed 
            // and that will help use to decrease the number of rerender when every time application mounts
            return res.data;
        }
    })
})
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkCount = get(networkAtom);
        const jobCount = get(jobAtom);
        const notificationCount = get(notificationAtom);
        const messageCount = get(messagingAtom);
        return networkCount + jobCount + notificationCount + messageCount;
    }
});
