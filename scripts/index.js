let jobs = [
    { id: 1, company: "Mobile First Corp", pos: "React Native Developer", loc: "Remote", type: "Full-time", salary: "$130,000 - $175,000", status: "all", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide." },
    { id: 2, company: "WebFlow Agency", pos: "Web Designer & Developer", loc: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", status: "all", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends." },
    { id: 3, company: "DataViz Solutions", pos: "Data Visualization Specialist", loc: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", status: "all", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
    { id: 4, company: "CloudFirst Inc", pos: "Backend Developer", loc: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", status: "all", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure." },
    { id: 5, company: "Innovation Labs", pos: "UI/UX Engineer", loc: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", status: "all", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
    { id: 6, company: "MegaCorp Solutions", pos: "JavaScript Developer", loc: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", status: "all", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation and professional development." },
    { id: 7, company: "StartupXYZ", pos: "Full Stack Engineer", loc: "Remote", type: "Full-time", salary: "$120,000 - $160,000", status: "all", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required." },
    { id: 8, company: "TechCorp Industries", pos: "Senior Frontend Developer", loc: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", status: "all", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript." }
];

let activeTab = 'all';

function render() {
    const jobList = document.getElementById('job-list');
    const emptyState = document.getElementById('empty-state');
    const filtered = jobs.filter(j => activeTab === 'all' ? true : j.status === activeTab);

    jobList.innerHTML = '';
    
    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative";
            card.innerHTML = `
                <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-gray-300 hover:text-red-500 transition-colors">
                    <i class="fa-solid fa-trash-can text-lg"></i>
                </button>
                <h3 class="text-xl font-bold text-[#001f3f] mb-1">${job.company}</h3>
                <p class="text-gray-600 font-medium mb-3">${job.pos}</p>
                <div class="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <span>${job.loc}</span> • <span>${job.type}</span> • <span>${job.salary}</span>
                </div>
                <div class="mb-4">
                    <span class="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded uppercase">
                        ${job.status === 'all' ? 'NOT APPLIED' : job.status}
                    </span>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed mb-6 max-w-4xl">${job.desc}</p>
                <div class="flex gap-3">
                    <button onclick="setStatus(${job.id}, 'interview')" class="px-4 py-1.5 border rounded-md text-sm font-semibold transition-all ${job.status === 'interview' ? 'bg-[#10b981] text-white border-[#10b981]' : 'text-[#10b981] border-[#10b981] hover:bg-green-50'}">INTERVIEW</button>
                    <button onclick="setStatus(${job.id}, 'rejected')" class="px-4 py-1.5 border rounded-md text-sm font-semibold transition-all ${job.status === 'rejected' ? 'bg-[#ef4444] text-white border-[#ef4444]' : 'text-[#ef4444] border-[#ef4444] hover:bg-red-50'}">REJECTED</button>
                </div>
            `;
            jobList.appendChild(card);
        });
    }
    updateDashboard();
}