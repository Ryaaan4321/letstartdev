import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 99
});

export const jobAtom = atom({
    key: "jobAtom",
    default: 4
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 1
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 2
});

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
