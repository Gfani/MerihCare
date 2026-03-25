import { useState } from 'react';
import { CheckCircle, Clock, User, Star, FileText } from 'lucide-react';
import { Button } from '../ui/button';

interface JobCompletionScreenProps {
  onSubmit: () => void;
}

export function JobCompletionScreen({ onSubmit }: JobCompletionScreenProps) {
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);

  const job = {
    patientName: 'John Doe',
    duration: '45 min',
    earnings: '120 ETB',
    startTime: '10:15 AM',
    endTime: '11:00 AM',
  };

  const commonIssues = [
    'Hypertension',
    'Diabetes',
    'Respiratory Issue',
    'Cardiac Issue',
    'Fever',
    'Pain Management',
    'Wound Care',
    'Other',
  ];

  const toggleIssue = (issue: string) => {
    setSelectedIssues(prev =>
      prev.includes(issue)
        ? prev.filter(i => i !== issue)
        : [...prev, issue]
    );
  };

  const handleSubmit = () => {
    // In production, this would send data to backend
    console.log({
      notes,
      rating,
      selectedIssues,
    });
    onSubmit();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-8 flex-shrink-0">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Job Completed! ✅</h1>
          <p className="text-green-100">Great work! Please submit your report.</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-6 py-6 space-y-5">
          {/* Job Summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">JOB SUMMARY</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Patient</p>
                  <p className="text-base font-semibold text-gray-900">{job.patientName}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <p className="text-xs text-purple-700 font-medium">Duration</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{job.duration}</p>
                </div>

                <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-green-700 font-medium">Earnings</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{job.earnings}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Time</p>
                <p className="text-sm font-medium text-gray-900">
                  {job.startTime} - {job.endTime}
                </p>
              </div>
            </div>
          </div>

          {/* Patient Rating (Optional) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">RATE YOUR EXPERIENCE</h3>
            <p className="text-sm text-gray-600 mb-4">How was your experience with this patient?</p>
            
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-gray-600 mt-3">
                {rating === 5 && 'Excellent!'}
                {rating === 4 && 'Very Good'}
                {rating === 3 && 'Good'}
                {rating === 2 && 'Fair'}
                {rating === 1 && 'Needs Improvement'}
              </p>
            )}
          </div>

          {/* Medical Issues Treated */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">ISSUES ADDRESSED</h3>
            <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
            
            <div className="grid grid-cols-2 gap-2">
              {commonIssues.map((issue) => (
                <button
                  key={issue}
                  onClick={() => toggleIssue(issue)}
                  className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                    selectedIssues.includes(issue)
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  {issue}
                </button>
              ))}
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">TREATMENT NOTES</h3>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes about symptoms, treatment provided, medications, or any important observations..."
                rows={6}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {notes.length} characters
            </p>
          </div>

          {/* Quick Notes Suggestions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">QUICK TEMPLATES</h3>
            <div className="space-y-2">
              <button
                onClick={() => setNotes('Vital signs checked and stable. Patient advised to rest and take prescribed medication.')}
                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-700 transition-colors"
              >
                ✓ Vital signs stable
              </button>
              <button
                onClick={() => setNotes('Emergency treatment provided. Patient condition stabilized. Advised to follow up with specialist.')}
                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-700 transition-colors"
              >
                🚨 Emergency stabilized
              </button>
              <button
                onClick={() => setNotes('Routine checkup completed. All parameters within normal range. No immediate concerns.')}
                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-700 transition-colors"
              >
                📋 Routine checkup
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="space-y-3 pb-6">
            <Button
              onClick={handleSubmit}
              disabled={!notes.trim()}
              className={`w-full py-5 text-lg font-bold rounded-xl shadow-lg ${
                notes.trim()
                  ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              SUBMIT REPORT
            </Button>

            <p className="text-center text-xs text-gray-500">
              Make sure all information is accurate before submitting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}