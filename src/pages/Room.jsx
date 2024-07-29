import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {
    // roomId
    const { roomID } = useParams();

    // fun myMeeting
    let meeting = (element) => {
        const appID = Number(import.meta.env.VITE_appID);
        const serverSecret = import.meta.env.VITE_Server;

        // token
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            'prosa');
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        //
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                  name: 'Share link',
                  url:
                   window.location.protocol + '//' + 
                   window.location.host + window.location.pathname +
                    '?roomID=' +
                    roomID,
                },
              ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });

    }
    return (
        <div ref={meeting} className="w-screen h-screen"/>
    );
};

export default Room;