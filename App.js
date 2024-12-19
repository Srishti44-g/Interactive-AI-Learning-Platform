import React, { useState } from 'react';
import { ChevronRight, ChevronDown, BookOpen, Layout, Code, Activity, Check } from 'lucide-react';

const LearningPlatform = () => {
  const [selectedTopic, setSelectedTopic] = useState('intro');
  const [expandedTopics, setExpandedTopics] = useState(['intro']);

  const topics = {
    intro: {
      title: 'Introduction to AI',
      subtopics: [
        'What is Artificial Intelligence?',
        'Types of AI Systems',
        'History of AI'
      ],
      progress: 75
    },
    ml: {
      title: 'Machine Learning Basics',
      subtopics: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning'
      ],
      progress: 45
    },
    neural: {
      title: 'Neural Networks',
      subtopics: [
        'Perceptrons',
        'Activation Functions',
        'Backpropagation'
      ],
      progress: 20
    }
  };

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Learning Path</h1>
        </div>
        <nav className="space-y-1">
          {Object.entries(topics).map(([key, topic]) => (
            <div key={key}>
              <button
                onClick={() => toggleTopic(key)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium ${
                  selectedTopic === key ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {expandedTopics.includes(key) ? (
                  <ChevronDown className="mr-2 h-4 w-4" />
                ) : (
                  <ChevronRight className="mr-2 h-4 w-4" />
                )}
                {topic.title}
              </button>
              {expandedTopics.includes(key) && (
                <div className="pl-8 py-2 space-y-1">
                  {topic.subtopics.map((subtopic, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      {subtopic}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {topics[selectedTopic].title}
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  <h3 className="ml-2 text-lg font-semibold">Course Content</h3>
                </div>
                <p className="text-gray-600">
                  {topics[selectedTopic].subtopics.length} lessons
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-green-500" />
                  <h3 className="ml-2 text-lg font-semibold">Practice</h3>
                </div>
                <p className="text-gray-600">12 exercises</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Activity className="h-6 w-6 text-purple-500" />
                  <h3 className="ml-2 text-lg font-semibold">Progress</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${topics[selectedTopic].progress}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {topics[selectedTopic].progress}% complete
                </p>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Current Lesson</h3>
            <div className="space-y-4">
              {topics[selectedTopic].subtopics.map((subtopic, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 border rounded hover:bg-gray-50"
                >
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{subtopic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
