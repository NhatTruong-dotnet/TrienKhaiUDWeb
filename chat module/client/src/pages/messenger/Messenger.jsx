import './messenger.css'
import Topbar from "../../components/topbar/Topbar"
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input type="text" placeholder='Search for friends' className='chatMenuInput' />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message messageText="Đăng ký khóa học của thầy chưa"/>
              <Message own={true} messageText="Em chưa thầy ạ"/>
              <Message  messageText="Khóa học của thầy nó rất là hay luôn"/>
              <Message  messageText="Tổng hợp từ kinh nghiệm thực tế từ việc giảng dạy và đi làm của thầy"/>
              <Message own={true}  messageText="Nghe có vẻ hấp dẫn quá nhỉ"/>
              <Message  messageText="Đúng như vậy, chia sẻ kiến thức để giúp đỡ các em là chính"/>
              <Message  messageText="Những kiến thức này trên trường hầu như là không dạy"/>
              <Message own={true}  messageText="À thế à"/>
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea className='chatMessageInput' placeholder='write something'></textarea>
              <button className='chatSubmitButton'>Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>

  )
}
