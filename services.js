/* The service boundary keeps this static build ready for a future API. */
window.DristiService = {
  async loginPatient({ email, password }) { await new Promise(resolve => setTimeout(resolve, 250)); if (!email || !password) throw new Error('Please enter your email address and password.'); return { email }; },
  async saveRegistration(data) { await new Promise(resolve => setTimeout(resolve, 200)); return { ...data, recordedAt: new Date().toISOString() }; },
  async saveConsent(data) { await new Promise(resolve => setTimeout(resolve, 160)); return { ...data, recordedAt: new Date().toISOString() }; },
  async saveInterviewResponse(data) { await new Promise(resolve => setTimeout(resolve, 180)); return { ...data, savedAt: new Date().toISOString() }; },
  async submitCase(data) { await new Promise(resolve => setTimeout(resolve, 260)); return { ...data, submittedAt: new Date().toISOString() }; },
  async processDocument({ name, type, context }) { await new Promise(resolve => setTimeout(resolve, 180)); return { name, type, context, processedAt: new Date().toISOString() }; }
};
