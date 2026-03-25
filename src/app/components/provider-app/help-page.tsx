import { Menu, Bell, User, HelpCircle, Phone, Mail, MessageCircle, FileText, ChevronRight } from 'lucide-react';

interface HelpPageProps {
  onMenuOpen: () => void;
}

export function HelpPage({ onMenuOpen }: HelpPageProps) {
  const faqItems = [
    {
      question: 'How do I accept a job request?',
      answer: 'When you receive a request, tap "Accept" within 15 seconds to confirm the job.',
    },
    {
      question: 'How are payments processed?',
      answer: 'Payments are processed weekly and transferred directly to your registered bank account.',
    },
    {
      question: 'What should I do in an emergency?',
      answer: 'Call our emergency support line at 911 or use the emergency button in the app.',
    },
    {
      question: 'How do I update my availability?',
      answer: 'Go to Settings > Availability to set your working hours and days.',
    },
  ];

  const supportOptions = [
    {
      title: 'Call Support',
      description: '24/7 helpline',
      icon: Phone,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      action: 'tel:+251911234567',
    },
    {
      title: 'Email Us',
      description: 'support@medicare.com',
      icon: Mail,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      action: 'mailto:support@medicare.com',
    },
    {
      title: 'Live Chat',
      description: 'Chat with our team',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      action: '#',
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onMenuOpen}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold">Help & Support</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6" />
              <p className="text-blue-100 text-sm">We're here to help you 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {/* Quick Support Options */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">QUICK SUPPORT</h3>
            <div className="space-y-3">
              {supportOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.title}
                    className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl ${option.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${option.color}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-bold text-gray-900">{option.title}</p>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-sm border-2 border-red-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Emergency Hotline</h4>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg">
              Call 911 Now
            </button>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">FREQUENTLY ASKED QUESTIONS</h3>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                  <button className="w-full text-left mb-2">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* User Guides */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">USER GUIDES</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <span className="flex-1 text-left font-medium text-gray-900">Getting Started Guide</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <span className="flex-1 text-left font-medium text-gray-900">Job Management</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <span className="flex-1 text-left font-medium text-gray-900">Payment & Earnings</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <span className="flex-1 text-left font-medium text-gray-900">Safety Guidelines</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Report an Issue */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">REPORT AN ISSUE</h3>
            <p className="text-sm text-gray-600 mb-4">
              Experiencing a problem? Let us know and we'll help you resolve it quickly.
            </p>
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg">
              Submit a Report
            </button>
          </div>

          {/* App Info */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 text-center">
            <p className="text-sm text-gray-600 mb-2">MEDI CARE Provider App</p>
            <p className="text-xs text-gray-500">Version 2.1.0 • Last updated: Mar 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
