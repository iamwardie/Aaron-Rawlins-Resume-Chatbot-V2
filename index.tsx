import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from '@google/genai';

// --- START OF CONTEXT DOCUMENTS ---
const resumeText = `
Summary
AARON RAWLINS
Security and Compliance Executive
Austin, TX
303-709-4318
iamwardie@gmail.com
linkedin.com/in/aaronrawlins
Dynamic executive with 25+ years leading operations, security, and GRC for Fortune 500 firms. Architected secure cloud frameworks and managed Cloud
operations in supporting over $1T+ in supported client revenue (2024). Architected and led cross-functional teams of developers, engineers, and project
managers to design, operate, and deploy internal and third-party security tools enterprise-wide across IBM and client operations. Oversaw 15+ years of GRC for
healthcare/finance/industrial, driving compliance initiatives that mitigated risks and ensured zero material audit findings across NIST, HIPAA, GDPR, PCI, and
more.
Work experience
Director Cloud Observability and Core Operations
IBM
2024-09 - present
Directed IBM Cloud monitoring/maintenance for 99.99% availability, automating deployment pipelines and leveraging SRE/NRE for scalability and resilience.
Led incident response for cross-functional teams, resolving outages per SLAs, conducting root-cause analyses, and minimizing recurrence via preventive
measures.
Architected observability ecosystems with dashboards, alerting, and metrics aggregation for cloud-native apps, enabling proactive issue detection.
Developed Al/automation roadmap, integrating high-impact solutions to cut MTTR, optimize costs, and align with business goals.
Integrated Security into Business Operations: Embed security controls into cloud/infrastructure deployments, such as access management, intrusion
detection, and monitoring tools, while balancing innovation and compliance.
Lead Cross-Functional Projects and Initiatives: Drive large-scale security projects across engineering, product, and business teams, including planning,
budgeting, contingency development, and stakeholder collaboration with risk, audit, and compliance groups.
Director Compliance and Security Services
IBM
2019-06-2024-09
Supervised the implementation and operation of 17 security services, including IAM, secrets management, vulnerability scanning, and compliance
automation, to safeguard enterprise-wide systems.
Directed Governance, Risk, and Compliance (GRC) initiatives aligned with NIST frameworks to ensure adherence to standards such as CIS, ITIL, PCI, COBIT,
GDPR, and HIPAA across cloud-based environments.
Oversaw a global team of 50+ security professionals across the United States and India, emphasizing talent development and aligning performance with
organizational goals.
Designed bespoke security solutions to effectively balance risk management, regulatory compliance, and innovation within IBM Cloud infrastructure.
Spearheaded operational management of global teams by streamlining HR processes, optimizing talent capability development efforts, and allocating
resources for maximal efficiency.
Pioneered strategies for enhancing cloud infrastructure security while maintaining compliance with evolving industry regulations.
Executive Security/Compliance Architect
IBM Watson/Waston Health/IBM CISO
2016-01-2019-12
Authored and implemented the first Security Policy and Governance, Risk, and Compliance (GRC) framework for Watson Health, aligning operations with IBM,
HIPAA, and NIST guidelines.
Designed security processes and controls compliant with SOC 2 and HIPAA standards, chairing the Security Review Board to evaluate tools effectively.
Integrated security solutions across IBM products, ensuring adherence to established standards while enabling scalable protection mechanisms.
Conducted performance tracking of security programs, including metrics analysis, financial oversight, and process optimization for enhanced threat
detection, data protection, and compliance.
Oversaw global teams of security professionals, directing talent development initiatives, optimizing team performance strategies, and allocating resources
efficiently for operational success.
Optimized and monitored security programs to ensure alignment with regulatory requirements while enhancing operational resilience against emerging
threats.
Cloud Regulatory Compliance Officer
IBM Global Technology Services
2015-01-2016-12
Conducted comprehensive risk assessments across the organization, identifying compliance gaps and implementing targeted remediation strategies to
improve alignment with regulatory standards.
Designed and implemented global policies, frameworks, processes, and tools for cloud delivery operations in adherence to regulatory requirements.
Collaborated with sales teams to develop compliant cloud solutions, enhancing organizational competitiveness within regulated markets.
Directed IT delivery teams to manage regulated infrastructure effectively, optimizing resource utilization and ensuring reliable support services.
Streamlined compliance processes for cloud services, achieving improved operational efficiency while maintaining adherence to industry regulations.
Integrated regulatory requirements into cloud delivery practices across multiple regions, strengthening overall compliance posture on a global scale.
Global Security Program Manager
IBM Security Delivery
2009-01-2015-12
Directed security services, including endpoint detection, vulnerability scanning, and access controls, for high-profile clients such as KPMG, Kaiser Permanente,
and Nissan.
Supervised Global Risk and Compliance programs to provide managed security solutions tailored to organizational needs.
Oversaw the delivery of contracted security services, ensuring alignment with budgetary constraints and agreed-upon metrics.
Managed performance tracking and reporting for contract delivery across multiple large US organizations.
Delivered scalable security solutions that aligned with client compliance requirements and industry standards.
Collaborated with stakeholders to ensure successful execution of global security service operations.
Business Analyst
IBM Managed Security Service Delivery
2007-8-2009-1
Conducted in-depth analysis of business requirements to design effective solutions aligned with client objectives within the Managed Security Service Delivery
domain.
Collaborated with cross-functional teams to ensure timely delivery of security services and adherence to established service level agreements (SLAs).
Facilitated communication between technical teams and stakeholders to streamline processes and enhance operational efficiency.
Developed detailed reports and dashboards to monitor key performance indicators, track project progress, and identify areas for improvement.
Performed comprehensive data analysis to support decision-making and drive continuous improvement across service delivery operations.
Ensured compliance with industry standards and best practices in cybersecurity by maintaining up-to-date knowledge of emerging threats and innovations.
Security Services Lead
IBM- Managed Security Services Delivery
2001-05-2007-8
Development and implementation of standalone security services focused on vulnerability management and benchmark scanning for IBM GTS clients.
Leadership of a team comprising six security engineers, ensuring efficient management of day-to-day operations related to vulnerability scanning, benchmark
scanning, and penetration testing.
Delivery of tailored Managed Security Services addressing client-specific requirements in the areas of vulnerability management and compliance reviews.
Oversight of service performance, maintaining adherence to security standards and operational benchmarks.
Coordination with internal stakeholders to innovate scalable security solutions enhancing organizational cybersecurity posture.
Facilitation of process optimization for continuous improvement in service delivery effectiveness within the managed security environment.
Internal Auditor
IBM-GTS
2000-7-2001-05
Conducted comprehensive audits of internal processes and systems to ensure compliance with company policies and regulatory standards.
Assessed risk management strategies, identifying potential gaps and recommending actionable improvements.
Prepared detailed audit reports highlighting key findings, risks, and areas for improvement, shared with stakeholders to drive informed decision-making.
Coordinated with cross-functional teams to implement corrective action plans based on audit recommendations effectively.
Systems Administrator
IBM GTS
1999-6-2000-7
Managed and maintained IBM systems, including Windows, OS/2, and AIX, ensuring optimal performance and reliability.
Implemented upgrades and patch management processes to enhance system security and functionality.
Monitored system performance metrics to identify and resolve issues proactively, minimizing downtime.
Documented system configurations, updates, and best practices to streamline future maintenance efforts.
Professional Achievements
Reduced MTTS (Mean time to restore) almost 20 percent in 2025 over all cloud platforms for IBM Core operations
Managed a small team creating 6 Al toolsets in 2025 using RAG and MCP that collected incident data, reviewed all incident historical data, and opened war
rooms automatically including all relevant data for my core team to troubleshoot and begin the restore process for outages including both manual fixes
solutions and automation recovery between 2024 and 2025
Lead a team in creating a predictive analytics engine that could determine "node not ready" or "VSI failures" for nearly 60 percent of production use cases
between 10 minutes and 2 hours before failure, allowing automation or manual intervention before failures occurred fall of 2025.
Lead architecture and deployment of IBM Access solution "Accesshub" from CISO that met nearly 100 percent deployment in IBM internal accounts in 2019.
Negotiated Security and Compliance provisions for Watson Health's $1.2 billion contract with Teva Pharmaceuticals, signed in 2016, ensuring regulatory
alignment and contract risk mitigation.
Spearheaded the transformation of Kaiser Permanente's IT infrastructure under an outsourcing agreement to align with 2009 HIPAA/HITECH requirements,
resulting in a successful audit with no deficiencies.
Pioneered the role of GTS Cloud Compliance Officer at IBM in 2014, developing the foundational Governance, Risk, and Compliance (GRC) program that
underpins all subsequent IBM cloud compliance initiatives.
Served as the inaugural Security and Compliance professional at Watson Health, authoring the organization's first Security Policy and GRC framework to
support comprehensive security and compliance operations in 2015.
Directed over 200 audits across frameworks including SOC 2, NIST CSF 2.0, HIPAA, GDPR, CIS, SOX, CCPA/CPRA, PCI, COBIT, FedRAMP, and others, consistently
delivering satisfactory outcomes with zero material findings though 2025.
Conducted dozens of third-party vendor assessments, facilitating the establishment of secure and mutually beneficial business partnerships though 2024.
Education
Bachelor of Science
Colorado State University
1995-8-1999-6
Bachelor of Computer Science
Certifications
ISSAP
CISSP
IBM Badges:
Blockchain
Security and Privacy by Design
Quantum-Safe Encryption Essentials
Cloud Computing Fundamentals,
Big Data Foundations,
Security and Privacy by Design Foundations
Enterprise Design Thinking
Sr Leadership Fundamentals
Artificial Intelligence Fundamentals.
`;

const leadershipAndSkillsText = `
Leadership style:
My optimal leadership style is a dynamic fusion of transformational and servant leadership, often dubbed
"Empowered Vanguard Leadership," where the leader charges from the frontlines visibly tackling the toughest
challenges and igniting passion through personal investment rather than detached directives. This isn't about
micromanaging from the leader; it's about rolling up sleeves to co-create solutions, fostering a culture of radical
trust where decision-making authority cascades downward. By embedding psychological safety and clear
strategic guardrails, the executive empowers teams to own outcomes-equipping them with data-driven tools,
cross-functional autonomy, and a bias toward bold experimentation-transforming employees from mere
executors into entrepreneurial co-pilots who drive agile, resilient business decisions that propel the organization
forward at warp speed. The result? A high-velocity engine of innovation, where loyalty isn't commanded but
earned through shared victories.
Ranked Leadership skills of importance to me: that I feel I demonstrate daily
Results Orientation- I always list this number one as there is no way to be successful without a clear vision on
what your target is and what needs to be clearly committed to as a leader.
Innovation Leadership- would be second as there always needs to be a search for how to do things better, how to
increase your business or do it faster easier and better
Adaptability If your a truly innovative leader you have to deal with failing fast, and resetting plans and
expectations
Team Building and Culture I am a person of one, my current organization is over 200. Building a team that
executes even 1 percent better has more action then me doubling my work hours to try and achieve a goal!
Decisive Decision-Making- When there is enough data to make a decision, make it
Open Communication- To do all of the above, you always need clear open communication and feedback.
Tools:
IAM:
Professional knowledge: Active Directory, OpenLDAP, Microsoft Entra ID, Google Cloud Identity, Hashicorp Vault,
Deliana Secret Server.
Some hands on: FreelPA, Samba, Ping Identity.
SIEM:
Professional knowledge: Qradar, Splunk
Some hands on: Microsoft Sentinel, Elastic Security
GRC tooling:
Some hands on knowledge: Vanta, Drata, Secureframe
EDR
Professional Knowledge: Carbon Black
Some hands on: Falcon Insight (Crowdstrike), Microsfot Defender,
Scanning
Professional Knowledge: Tenable Nessus, Qualys, ZAP
Skills:
Network Security:
Endpoint Security: "Secures devices like laptops, servers, and mobiles against malware and exploits.","EDR tools,
antivirus, device management
Application Security: software and APIs.,"Secure coding, WAFs, DevSecOps; part of SABSA
Data Security: "Encryption, DLP, tokenization; core to confidentiality/integrity pillars in NIST and GDPR
compliance."
Identity and Access Management (IAM), "Controls who can access what, enforcing least privilege.", "SSO, MFA,
RBAC; lifecycle management in SABSA and central to zero-trust models."
Cloud Security, Addresses risks in multi-cloud and hybrid environments., "CASBs, CSPM, secure configurations;
guided by CSA CCM and NIST CSF for cloud adaptations."
Risk Management & Governance, "Identify, assesses, and mitigates risks while ensuring policy alignment.","Threat
modeling, GRC tools, audits; foundational in SABSA contextual layer and ISO 27001 ISMS."
Incident Detection & Response, Monitors for threats and enables rapid recovery.,"SIEM, SOAR, IR plans;
Detect/Respond/Recover functions and defense-in-depth best practice."
Compliance & Auditing,"Policy enforcement, reporting, and continuous improvement phases."
Cloud Security Focus on IBM's cloud but strong understanding of Google, AWS, and Microsoft.
Regulatory compliance with stong focused knowledge in Healthcare (HIPPA,) Federal (FISMA, FIPS, Fedramp) and
financial (PCI, SOX, GLBA, DORA, COBIT)
`;

const personalInfoText = `
Personal Information
Aaron lives outside Austin Tx on his ranch with his wife
His wife is a C-Level execute who works for a capital company.
He has 4 kids, 3 girls and a boy
His Hobby's include:
Running his Ranch hands on "Double Down Ranch" with a small heard of cattle. he spends his free
time upgrading fencing, running water lines, Cutting trees, and growing the nicest pasture in TX!
He enjoys healthy living and supporting functional health to optimize health and longevity. This
includes growing his meat and vegetables, diet and exercise.
I enjoy maintaining my ranch equipment
I have a Kubota 4060 Grand L series Tractor to help with the heavier ranching
He owns a family farm in Hale Missouri that produces corn and soy, but doers not do any of the
labor, just runs the business side.
I also enjoy travel and try to spend a week or two out of the year going to other countries, visiting
Italy, Mexico, and Scotland last year.
I fish and hunt on my ranch when I can.
I enjoy cooking health food that tastes good.
I was raised in Colorado and moved to Texas in 2023.
I played sports in school, and still follow the Avalanche, Nuggets and Broncos, as well as college
teams University of Texas and Colorado State!
I am very much into vibe coding new Al tools to stay current in Al in business and my personal life.
I was raised in Broomfield, and graduated Broomfield high school in 1995
I played basketball, Football, Hocky and wrestled in HS.
I am obsessed with physics, and love to read and watch videos on Quantum physics and computing.
`;
// --- END OF CONTEXT DOCUMENTS ---

const systemInstruction = `You are a professional and helpful digital assistant for Aaron Rawlins, a Security and Compliance Executive. Your purpose is to answer questions from a potential interviewer based *strictly* on the provided documents about Aaron's professional experience, skills, leadership style, and personal background.

Here are the documents:
--- START OF RESUME ---
${resumeText}
--- END OF RESUME ---

--- START OF LEADERSHIP & SKILLS DOCUMENT ---
${leadershipAndSkillsText}
--- END OF LEADERSHIP & SKILLS DOCUMENT ---

--- START OF PERSONAL INFORMATION DOCUMENT ---
${personalInfoText}
--- END OF PERSONAL INFORMATION DOCUMENT ---

RULES:
1. Answer all questions from a third-person perspective about Aaron (e.g., "Aaron's experience includes...", "He believes that...").
2. Base your answers *only* on the information contained within the three provided documents. Do not invent any information or use external knowledge.
3. If a question cannot be answered from the provided text, politely state that the information is not available in the provided documents. For example: "I do not have specific details on that topic in the documents I have access to. However, I can share information about his related experience in..."
4. Keep your answers concise, professional, and relevant to an interview context.
5. When asked a general opening question like "Tell me about yourself" or "Tell me about Aaron", provide a concise summary based on the 'Summary' section of the resume.
`;

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}
const ai = new GoogleGenAI({ apiKey: API_KEY });

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      { 
        sender: 'assistant', 
        text: "Hello! I'm Aaron Rawlins' digital assistant. I can answer questions about his experience, skills, and background based on his professional documents. How can I help you today?" 
      }
    ]);
  }, []);
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: input }]
          }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });
      
      const assistantMessage = { sender: 'assistant', text: response.text };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = { sender: 'assistant', text: "I'm sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <div className="chat-container" aria-live="polite">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="chat-message assistant typing-indicator">
            <span></span><span></span><span></span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about Aaron..."
          aria-label="Chat input"
          disabled={isLoading}
        />
        <button type="submit" disabled={!input.trim() || isLoading}>
          Send
        </button>
      </form>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
