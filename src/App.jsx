import React, { useState, useEffect } from 'react';
import { Home, MessageSquare, FolderOpen, Clock, Users, Bot, BarChart3, CheckCircle, AlertCircle, Calendar, MapPin, Upload, Send, Menu } from 'lucide-react';

const ConstructionDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! I can help you with company SOPs. What would you like to know?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    { id: 1, name: 'Downtown Office Complex', progress: 65, milestone: 'Foundation Complete', status: 'on-track', team: 12, deadline: '2025-12-15' },
    { id: 2, name: 'Residential Tower A', progress: 42, milestone: 'Framing', status: 'on-track', team: 18, deadline: '2026-03-20' },
    { id: 3, name: 'Shopping Mall Renovation', progress: 78, milestone: 'Interior Finishing', status: 'ahead', team: 8, deadline: '2025-11-30' },
    { id: 4, name: 'Highway Bridge Project', progress: 23, milestone: 'Site Preparation', status: 'delayed', team: 15, deadline: '2026-06-10' },
  ];

  const milestones = [
    { id: 1, name: 'Site Survey', status: 'complete', date: '2025-01-15' },
    { id: 2, name: 'Foundation', status: 'complete', date: '2025-03-20' },
    { id: 3, name: 'Structural Work', status: 'in-progress', date: '2025-06-15' },
    { id: 4, name: 'MEP Installation', status: 'pending', date: '2025-09-01' },
    { id: 5, name: 'Interior Finishing', status: 'pending', date: '2025-11-15' },
  ];

  const teamMessages = [
    { id: 1, sender: 'John Smith', role: 'Project Manager', message: 'Foundation inspection scheduled for tomorrow at 9 AM', time: '10:30 AM', project: 'Downtown Office' },
    { id: 2, sender: 'Sarah Johnson', role: 'Site Engineer', message: 'Material delivery confirmed for Friday', time: '11:15 AM', project: 'Residential Tower A' },
    { id: 3, sender: 'Mike Chen', role: 'Safety Officer', message: 'Safety training session next Monday', time: '2:45 PM', project: 'All Projects' },
  ];

  const files = [
    { id: 1, name: 'Blueprint_Rev3.pdf', size: '2.4 MB', uploadedBy: 'John Smith', date: '2025-10-05', project: 'Downtown Office' },
    { id: 2, name: 'Safety_Checklist.xlsx', size: '156 KB', uploadedBy: 'Mike Chen', date: '2025-10-04', project: 'All Projects' },
    { id: 3, name: 'Material_List.docx', size: '89 KB', uploadedBy: 'Sarah Johnson', date: '2025-10-03', project: 'Residential Tower A' },
  ];

  const timeRecords = [
    { id: 1, name: 'John Smith', clockIn: '07:45 AM', clockOut: '-', location: 'Downtown Office', status: 'active' },
    { id: 2, name: 'Sarah Johnson', clockIn: '08:00 AM', clockOut: '-', location: 'Residential Tower A', status: 'active' },
    { id: 3, name: 'Mike Chen', clockIn: '07:30 AM', clockOut: '04:30 PM', location: 'HQ Office', status: 'completed' },
  ];

  const handleSendChat = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { id: chatMessages.length + 1, sender: 'user', text: chatInput },
        { id: chatMessages.length + 2, sender: 'bot', text: `Based on our SOP, here's what I found: "${chatInput}" relates to standard safety procedures. All workers must wear PPE at all times. Would you like more details?` }
      ]);
      setChatInput('');
    }
  };

  const handleClockInOut = () => {
    setIsClockedIn(!isClockedIn);
  };

  const StatusBadge = ({ status }) => {
    const colors = {
      'on-track': 'bg-green-100 text-green-700',
      'ahead': 'bg-blue-100 text-blue-700',
      'delayed': 'bg-red-100 text-red-700',
      'complete': 'bg-green-100 text-green-700',
      'in-progress': 'bg-yellow-100 text-yellow-700',
      'pending': 'bg-gray-100 text-gray-700',
      'active': 'bg-green-100 text-green-700',
      'completed': 'bg-gray-100 text-gray-700',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
        {status.replace('-', ' ')}
      </span>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
            </div>
            <BarChart3 className="w-10 h-10 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Team Members</p>
              <p className="text-3xl font-bold text-gray-900">53</p>
            </div>
            <Users className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Progress</p>
              <p className="text-3xl font-bold text-gray-900">52%</p>
            </div>
            <CheckCircle className="w-10 h-10 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Issues</p>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h2>
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                 onClick={() => setSelectedProject(project)}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">Current: {project.milestone}</p>
                </div>
                <StatusBadge status={project.status} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Progress: {project.progress}%</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team} members
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.deadline}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMessaging = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col" style={{ height: '600px' }}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Team Messages</h2>
          <p className="text-sm text-gray-600">Project: Downtown Office Complex</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {teamMessages.map(msg => (
            <div key={msg.id} className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {msg.sender.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{msg.sender}</span>
                  <span className="text-xs text-gray-500">{msg.role}</span>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                <p className="text-gray-700 mt-1">{msg.message}</p>
                <span className="text-xs text-gray-500">{msg.project}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Active Team Members</h3>
        <div className="space-y-3">
          {timeRecords.filter(r => r.status === 'active').map(record => (
            <div key={record.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-semibold">
                {record.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-900">{record.name}</p>
                <p className="text-xs text-gray-600">{record.location}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFiles = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">File Library</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload File
        </button>
      </div>
      <div className="space-y-3">
        {files.map(file => (
          <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <FolderOpen className="w-8 h-8 text-blue-500" />
              <div>
                <p className="font-semibold text-gray-900">{file.name}</p>
                <p className="text-sm text-gray-600">
                  {file.size} • Uploaded by {file.uploadedBy} • {file.date}
                </p>
                <span className="text-xs text-gray-500">{file.project}</span>
              </div>
            </div>
            <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">Download</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHR = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Time & Attendance</h2>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Current Time</p>
            <p className="text-4xl font-bold text-gray-900">{currentTime.toLocaleTimeString()}</p>
            <p className="text-sm text-gray-600 mt-1">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <button
            onClick={handleClockInOut}
            className={`w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 ${isClockedIn ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
          >
            <MapPin className="w-5 h-5" />
            {isClockedIn ? 'Clock Out' : 'Clock In'} with Geo-Location
          </button>
          {isClockedIn && (
            <p className="text-center text-sm text-gray-600 mt-3">
              Location: Downtown Office Complex (GPS: 37.7749° N, 122.4194° W)
            </p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Attendance</h2>
        <div className="space-y-3">
          {timeRecords.map(record => (
            <div key={record.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  {record.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{record.name}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {record.location}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">In: {record.clockIn}</p>
                <p className="text-sm text-gray-600">Out: {record.clockOut}</p>
                <StatusBadge status={record.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMilestones = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Project Milestones</h2>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="flex gap-4">
            <div className="flex flex-col itemscenter">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${milestone.status === 'complete' ? 'bg-green-500' : (milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300')}`}>
                {milestone.status === 'complete' ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-white font-bold">{index + 1}</span>
                )}
              </div>
              {index < milestones.length - 1 && (
                <div className={`w-1 h-16 ${milestone.status === 'complete' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{milestone.name}</h3>
                <StatusBadge status={milestone.status} />
              </div>
              <p className="text-sm text-gray-600 mt-1">Target Date: {milestone.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderChatbot = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col" style={{ height: '700px' }}>
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-bold">SOP Assistant</h2>
            <p className="text-sm opacity-90">Ask me about company procedures and policies</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {chatMessages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-md px-4 py-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
              {msg.sender === 'bot' && (
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600">SOP Assistant</span>
                </div>
              )}
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
            placeholder="Ask about safety procedures, protocols, etc..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button 
            onClick={handleSendChat}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h1 className="text-xl font-bold">BuildOps</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-700 rounded">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <Home className="w-5 h-5" />{sidebarOpen && <span>Dashboard</span>}
          </button>
          <button onClick={() => setActiveTab('milestones')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === 'milestones' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <CheckCircle className="w-5 h-5" />{sidebarOpen && <span>Milestones</span>}
          </button>
          <button onClick={() => setActiveTab('messaging')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === 'messaging' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <MessageSquare className="w-5 h-5" />{sidebarOpen && <span>Messaging</span>}
          </button>
          <button onClick={() => setActiveTab('files')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === 'files' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <FolderOpen className="w-5 h-5" />{sidebarOpen && <span>Files</span>}
          </button>
          <button onClick={() => setActiveTab('hr')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === 'hr' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <Clock className="w-5 h-5" />{sidebarOpen && <span>HR & Time</span>}
          </button>
          <button onClick={() => setActiveTab('chatbot')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === 'chatbot' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <Bot className="w-5 h-5" />{sidebarOpen && <span>SOP Assistant</span>}
          </button>
        </nav>
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">© 2025 BuildOps Dashboard</p>
            <p className="text-xs text-gray-400">Prototype Version</p>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeTab === 'dashboard' && 'Project Dashboard'}
              {activeTab === 'milestones' && 'Milestone Tracking'}
              {activeTab === 'messaging' && 'Team Communication'}
              {activeTab === 'files' && 'File Management'}
              {activeTab === 'hr' && 'HR & Time Management'}
              {activeTab === 'chatbot' && 'AI SOP Assistant'}
            </h1>
            <p className="text-gray-600">
              {activeTab === 'dashboard' && 'Overview of all active construction projects'}
              {activeTab === 'milestones' && 'Track project phases and completion status'}
              {activeTab === 'messaging' && 'Collaborate with your team in real-time'}
              {activeTab === 'files' && 'Share and manage project documents'}
              {activeTab === 'hr' && 'Clock in/out with geo-location tracking'}
              {activeTab === 'chatbot' && 'Get instant answers about company procedures'}
            </p>
          </div>

          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'milestones' && renderMilestones()}
          {activeTab === 'messaging' && renderMessaging()}
          {activeTab === 'files' && renderFiles()}
          {activeTab === 'hr' && renderHR()}
          {activeTab === 'chatbot' && renderChatbot()}
        </div>
      </div>
    </div>
  );
};

export default function App(){ return <ConstructionDashboard />; }
