import React, { useState } from 'react';
function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, content: 'Salut, comment ça va ?', sender: 'user' },
    { id: 2, content: 'Ça va bien, merci. Et toi ?', sender: 'bot' },
    { id: 3, content: 'Je vais bien aussi. Que puis-je faire pour toi ?', sender: 'user' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  function handleNewMessageChange(event) {
    setNewMessage(event.target.value);
  }

  function handleSendMessage() {
    if (newMessage.trim() === '') {
      return;
    }

    const newId = messages.length + 1;
    const newMessages = [...messages, { id: newId, content: newMessage.trim(), sender: 'user' }];
    setMessages(newMessages);
    setNewMessage('');
  }
  function handleShareDocument() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx');
    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const newId = messages.length + 1;
      const newMessages = [...messages, { id: newId, content: file.name, sender: 'user', file }];
      setMessages(newMessages);
    });
    input.click();
  }
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex flex-col">
        <div className="bg-white border-b border-gray-200 flex justify-between items-center px-4 py-6 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Support en ligne</h2>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Déconnecter</button>
        </div>
        <div className="flex-grow overflow-y-scroll px-4 py-6 sm:px-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs rounded-lg ${message.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-900'} px-4 py-2 text-sm shadow`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex space-x-3">
  <input type="text" placeholder="Tapez votre message..." value={newMessage} onChange={handleNewMessageChange} className="flex-grow border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300" />
  <button onClick={handleSendMessage} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Envoyer
  </button>
  <button onClick={handleShareDocument} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
     document
  </button>
</div>

      </div>
    </div>
  );
}

export default Chat;