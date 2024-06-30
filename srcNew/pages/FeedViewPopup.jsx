import { useNavigate } from 'react-router-dom';

export default function FeedViewPopup() {
  const navigate = useNavigate();

  const feedData = {
    id: '123',
    title: 'Feed Title',
    content: 'Feed Content',
  };

  const handleClosePopup = () => {
    navigate(-1); 
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Feed View Detail (Popup)</h2>
        <p>Feed ID: {feedData.id}</p>
        <p>Feed Title: {feedData.title}</p>
        <p>Feed Content: {feedData.content}</p>
        <button onClick={handleClosePopup}>Close</button>
      </div>
    </div>
  );
}