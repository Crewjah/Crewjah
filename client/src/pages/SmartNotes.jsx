import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUpload, FaFileAlt, FaMicrophone, FaDownload, FaBookmark, FaHighlighter, FaBrain } from 'react-icons/fa';

const SmartNotes = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedNotes, setProcessedNotes] = useState(null);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef(null);

  const tabs = [
    { id: 'upload', label: 'Upload Files', icon: FaUpload },
    { id: 'text', label: 'Paste Text', icon: FaFileAlt },
    { id: 'voice', label: 'Voice Notes', icon: FaMicrophone }
  ];

  const noteTemplates = [
    {
      title: 'Cornell Notes',
      description: 'Organized with cues, notes, and summary sections',
      icon: '📝',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Mind Map',
      description: 'Visual connections between concepts',
      icon: '🧠',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Outline Format',
      description: 'Structured hierarchical notes',
      icon: '📋',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Flashcard Set',
      description: 'Key terms and definitions for memorization',
      icon: '🎯',
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      processContent(files);
    }
  };

  const handleTextSubmit = () => {
    if (inputText.trim()) {
      processContent([{ type: 'text', content: inputText }]);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording logic would go here
      setTimeout(() => {
        setIsRecording(false);
        processContent([{ type: 'voice', content: 'Transcribed voice content would appear here...' }]);
      }, 3000);
    }
  };

  const processContent = async (content) => {
    setIsProcessing(true);
    
    // More realistic processing with dynamic content based on input
    setTimeout(() => {
      let mockNotes;
      
      // Analyze input type and create appropriate notes
      if (Array.isArray(content) && content[0]?.type === 'text') {
        const inputText = content[0].content.toLowerCase();
        
        if (inputText.includes('math') || inputText.includes('equation') || inputText.includes('algebra')) {
          mockNotes = {
            title: 'Mathematics Study Notes',
            keyPoints: [
              'Mathematical concepts build upon each other systematically',
              'Practice is essential for mastering problem-solving techniques',
              'Understanding the why behind formulas improves retention',
              'Real-world applications make abstract concepts concrete'
            ],
            definitions: [
              { term: 'Variable', definition: 'A symbol that represents an unknown or changing value' },
              { term: 'Equation', definition: 'A mathematical statement showing two expressions are equal' },
              { term: 'Function', definition: 'A relation between inputs and outputs where each input has exactly one output' }
            ],
            summary: 'Mathematics is a logical system of reasoning that helps us solve problems and understand patterns in the world around us.',
            studyQuestions: [
              'What strategies help when solving complex equations?',
              'How do you identify the type of mathematical problem?',
              'What are the most common mistakes to avoid?'
            ]
          };
        } else if (inputText.includes('history') || inputText.includes('war') || inputText.includes('civilization')) {
          mockNotes = {
            title: 'History Study Guide',
            keyPoints: [
              'Historical events are interconnected and influence each other',
              'Understanding context and timeline is crucial for comprehension',
              'Multiple perspectives exist for most historical events',
              'Primary sources provide firsthand accounts of historical periods'
            ],
            definitions: [
              { term: 'Primary Source', definition: 'Original documents or artifacts from the time period being studied' },
              { term: 'Secondary Source', definition: 'Analysis or interpretation of primary sources by later historians' },
              { term: 'Chronology', definition: 'The arrangement of events in order of their occurrence in time' }
            ],
            summary: 'History teaches us about human behavior, societal development, and helps us understand current events through past patterns.',
            studyQuestions: [
              'What factors led to this historical event?',
              'How did this event impact society at the time?',
              'What lessons can we learn from this period?'
            ]
          };
        } else {
          // General academic content
          mockNotes = {
            title: 'Study Notes Summary',
            keyPoints: [
              'Active learning techniques improve comprehension and retention',
              'Breaking complex topics into smaller parts aids understanding',
              'Regular review and practice strengthen knowledge',
              'Connecting new information to existing knowledge creates stronger memories'
            ],
            definitions: [
              { term: 'Active Learning', definition: 'Learning approach that engages students in the learning process' },
              { term: 'Critical Thinking', definition: 'Objective analysis and evaluation of information to form judgment' },
              { term: 'Synthesis', definition: 'Combining information from multiple sources to create new understanding' }
            ],
            summary: 'Effective studying involves active engagement with material, regular practice, and connecting new concepts to existing knowledge.',
            studyQuestions: [
              'What are the main concepts covered in this material?',
              'How do these concepts relate to what I already know?',
              'What examples can I think of to illustrate these ideas?'
            ]
          };
        }
      } else {
        // Default notes for file uploads or other content types
        mockNotes = {
          title: 'Processed Study Notes',
          keyPoints: [
            'Content has been analyzed and key information extracted',
            'Important concepts have been identified and organized',
            'Supporting details have been categorized for easy review',
            'Study materials have been formatted for optimal learning'
          ],
          definitions: [
            { term: 'Key Concept', definition: 'Central idea that forms the foundation of understanding' },
            { term: 'Supporting Detail', definition: 'Information that explains or provides evidence for key concepts' },
            { term: 'Study Strategy', definition: 'Systematic approach to learning and retaining information' }
          ],
          summary: 'Your content has been processed to highlight the most important information and create an effective study guide.',
          studyQuestions: [
            'What are the most important takeaways from this material?',
            'How can I apply this knowledge in practical situations?',
            'What additional information might be helpful to explore?'
          ]
        };
      }
      
      setProcessedNotes(mockNotes);
      setIsProcessing(false);
    }, 2000);
  };

  const downloadNotes = (format) => {
    // Mock download functionality
    console.log(`Downloading notes in ${format} format`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Smart Notes
          </h1>
          <p className="text-white/80 text-lg">
            Transform lectures, textbooks, and study materials into organized, memorable notes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Tab Navigation */}
              <div className="flex border-b border-white/20">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white border-b-2 border-purple-400'
                        : 'text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <tab.icon className="text-sm" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'upload' && (
                    <motion.div
                      key="upload"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-green-400 hover:bg-green-50 transition-colors"
                      >
                        <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Drop files here or click to upload
                        </p>
                        <p className="text-sm text-gray-500">
                          Supports PDFs, Word docs, PowerPoint, images, and audio files
                        </p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.mp3,.wav"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </motion.div>
                  )}

                  {activeTab === 'text' && (
                    <motion.div
                      key="text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Paste your lecture notes, textbook content, or any study material here..."
                        className="w-full h-64 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button
                        onClick={handleTextSubmit}
                        disabled={!inputText.trim() || isProcessing}
                        className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {isProcessing ? 'Processing...' : 'Create Smart Notes'}
                      </button>
                    </motion.div>
                  )}

                  {activeTab === 'voice' && (
                    <motion.div
                      key="voice"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center space-y-6"
                    >
                      <div className="relative">
                        <button
                          onClick={toggleRecording}
                          className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl transition-all duration-200 ${
                            isRecording
                              ? 'bg-red-500 text-white animate-pulse'
                              : 'bg-green-500 text-white hover:bg-green-600'
                          }`}
                        >
                          <FaMicrophone />
                        </button>
                        {isRecording && (
                          <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
                        )}
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          {isRecording ? 'Recording in progress...' : 'Click to start recording'}
                        </p>
                        <p className="text-sm text-gray-500">
                          Record lectures, discussions, or dictate your own notes
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Templates Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaBrain className="text-purple-400" />
                Note Templates
              </h3>
              <div className="space-y-3">
                {noteTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-white/20 bg-white/5 cursor-pointer hover:bg-white/10 hover:shadow-lg transition-all backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{template.icon}</span>
                      <div>
                        <h4 className="font-medium text-white">{template.title}</h4>
                        <p className="text-sm text-white/70 mt-1">{template.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Processed Notes Display */}
        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center"
            >
              <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Processing your content...</h3>
              <p className="text-gray-600">Creating organized notes with key points, definitions, and study questions</p>
            </motion.div>
          )}

          {processedNotes && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6"
            >
              {/* Notes Header */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{processedNotes.title}</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadNotes('pdf')}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                      <FaDownload />
                      PDF
                    </button>
                    <button
                      onClick={() => downloadNotes('docx')}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                    >
                      <FaDownload />
                      DOCX
                    </button>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaHighlighter className="text-blue-500" />
                    Summary
                  </h3>
                  <p className="text-gray-700">{processedNotes.summary}</p>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaBookmark className="text-green-500" />
                    Key Points
                  </h3>
                  <ul className="space-y-3">
                    {processedNotes.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Definitions */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaFileAlt className="text-blue-500" />
                    Key Terms
                  </h3>
                  <div className="space-y-3">
                    {processedNotes.definitions.map((def, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-medium text-gray-800">{def.term}</h4>
                        <p className="text-sm text-gray-600">{def.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Study Questions */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FaBrain className="text-purple-500" />
                  Study Questions
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {processedNotes.studyQuestions.map((question, index) => (
                    <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-gray-800">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SmartNotes;