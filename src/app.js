/**
 * Lumière Healthcare Institute — Core Application Engine
 * Pure Vanilla HTML, CSS & JavaScript
 * Complete EHR-FHIR Cross-Portal Real-time Synchronization
 */

// ================= 1. CHECKUP PACKAGES DATA (24 COMPREHENSIVE PROTOCOLS) =================
const CHECKUP_PACKAGES = [
  {
    id: 'executive-cardiac',
    code: '01 / CHECKUP',
    title: 'Executive Cardiovascular Audit',
    tagline: 'High-definition 640-slice Somatom Force CT coronary angiography, 3T cardiac cine MRI, and ApoB lipidomics.',
    category: 'cardiac',
    tests: ['Somatom Force 640-slice dual source CT coronary angiography', 'Siemens 3T Magnetom Vida cardiac cine function MRI', 'Advanced Apolipoprotein B (ApoB) & Lp(a) assay', '24-hour ambulatory Holter rhythm telemetry', 'Consultation with Senior Cardiologist'],
    duration: '4.5 hours',
    turnaround: 'Same day with clinical briefing',
    preparation: 'Overnight fasting (10 hours). Avoid caffeine 12 hours prior for CT gating.',
    fee: '₹18,500',
    suitableFor: 'Executives, individuals with family history of CAD, or coronary calcium evaluation.'
  },
  {
    id: 'advanced-cardiac',
    code: '02 / CHECKUP',
    title: 'Advanced Cardiometabolic Screen',
    tagline: 'Comprehensive vascular profiling with carotid intima-media Doppler, coronary calcium scoring, and hs-CRP.',
    category: 'cardiac',
    tests: ['Agatston coronary artery calcium (CAC) scoring', 'Carotid intima-media thickness (CIMT) high-res ultrasound', 'High-sensitivity C-reactive protein (hs-CRP)', 'Fasting insulin & HOMA-IR insulin resistance index', 'Stress echocardiography with Doppler evaluation'],
    duration: '3.5 hours',
    turnaround: 'Same day preliminary; full report 24 hours',
    preparation: 'Overnight fasting (8 hours). Comfortable clothing for treadmill stress test.',
    fee: '₹8,200',
    suitableFor: 'Men > 40 and women > 45, or anyone with metabolic syndrome or early hypertension.'
  },
  {
    id: 'whole-body-mri',
    code: '03 / CHECKUP',
    title: 'Comprehensive Whole-Body 3T MRI',
    tagline: 'Silent-scan diffusion-weighted whole-body MRI from skull vertex to mid-thigh for asymptomatic early detection.',
    category: 'imaging',
    tests: ['Siemens 3T Magnetom Vida whole-body axial & coronal sequences', 'Diffusion-weighted whole-body imaging with background suppression (DWIBS)', 'High-resolution neuro-axis brain & cervical spine screening', 'Abdominal & pelvic solid organ multi-parametric evaluation', 'Radiologist consultative review & 3D rendering'],
    duration: '60 minutes scan · 3 hours total',
    turnaround: 'Full multi-slice review within 48 hours',
    preparation: 'No metal implants, non-MRI compatible pacemakers, or neurostimulators. 4 hours fasting.',
    fee: '₹19,500',
    suitableFor: 'Individuals seeking deep oncological and anatomical surveillance.'
  },
  {
    id: 'neuro-vascular',
    code: '04 / CHECKUP',
    title: 'Neuro-Vascular & Stroke Risk Screen',
    tagline: '3T intracranial magnetic resonance angiography (MRA), transcranial Doppler, and cognitive biomarker profile.',
    category: 'imaging',
    tests: ['3T Time-of-Flight (TOF) intracranial & extracranial MR angiography', 'Transcranial Doppler (TCD) cerebral blood flow velocities', 'High-resolution T2-FLAIR white matter microvascular hyperintensity map', 'Serum homocysteine, vitamin B12 & methylmalonic acid', 'Senior Neurologist cognitive & vascular consultation'],
    duration: '3 hours',
    turnaround: 'Same day neurology debrief',
    preparation: 'No specific fasting required. Bring prior cranial scans if available.',
    fee: '₹7,800',
    suitableFor: 'Patients with migraine with aura, family history of aneurysms or early stroke.'
  },
  {
    id: 'early-detection-oncology',
    code: '05 / CHECKUP',
    title: 'Multi-Organ Oncological Early Detection',
    tagline: 'Next-generation liquid biopsy circulating tumor DNA (ctDNA) panel combined with low-dose volumetric chest CT.',
    category: 'specialized',
    tests: ['Ultra-low radiation 640-slice high-resolution chest CT', 'Targeted liquid biopsy multi-cancer early detection (MCED) ctDNA assay', 'Tumour markers: CEA, CA 19-9, AFP, and organ-specific antigens', 'Abdominal & retroperitoneal shear-wave elastography ultrasound', 'Medical Oncologist consultative review'],
    duration: '3.5 hours',
    turnaround: 'Imaging same day; ctDNA genomic panel in 10 business days',
    preparation: 'Fasting 6 hours. Hydrate well with still water prior to phlebotomy.',
    fee: '₹14,500',
    suitableFor: 'Long-term smokers, individuals with hereditary cancer predispositions, or adults > 50.'
  },
  {
    id: 'digestive-liver',
    code: '06 / CHECKUP',
    title: 'Digestive & Hepato-Pancreato-Biliary Screen',
    tagline: 'FibroScan liver stiffness elastography, high-resolution abdominal ultrasound, and occult fecal immunochemistry.',
    category: 'wellness',
    tests: ['FibroScan 502 Touch transient elastography & CAP steatosis score', 'High-frequency abdominal ultrasound: liver, gallbladder, pancreas, kidneys', 'High-sensitivity quantitative Fecal Immunochemical Test (FIT)', 'Comprehensive liver enzymes: AST, ALT, GGT, Alkaline Phosphatase', 'Gastroenterologist dietary & hepatic consultation'],
    duration: '2.5 hours',
    turnaround: 'Same day with liver health passport',
    preparation: 'Strict 4-hour fasting prior to FibroScan (water permitted).',
    fee: '₹5,500',
    suitableFor: 'Suspected fatty liver (NAFLD/MASLD), chronic metabolic syndrome, or digestive health review.'
  },
  {
    id: 'metabolic-longevity',
    code: '07 / CHECKUP',
    title: 'Metabolic Longevity & Glycemic Health',
    tagline: 'Continuous glucose monitor (CGM) initiation, visceral adipose DEXA scan, and advanced lipid particle fractionation.',
    category: 'wellness',
    tests: ['Hologic Horizon DEXA body composition: visceral fat rating & android/gynoid ratio', 'Oral Glucose Tolerance Test (OGTT) with 2-hour synchronous insulin curve', 'Nuclear Magnetic Resonance (NMR) lipoprotein particle number (LDL-P)', 'Free T3, Free T4, sensitive TSH & thyroid peroxidase antibodies', '14-day continuous glucose monitoring sensor placement & app sync'],
    duration: '3.5 hours',
    turnaround: 'Same day lab & DEXA; CGM telemetry reviewed on day 14',
    preparation: '10 hours overnight fasting. No strenuous workout the morning of testing.',
    fee: '₹6,900',
    suitableFor: 'Pre-diabetes, stubborn metabolic weight, or individuals seeking biomarker-guided longevity.'
  },
  {
    id: 'womens-longevity',
    code: '08 / CHECKUP',
    title: 'Women’s Comprehensive Health & Longevity',
    tagline: '3D digital breast tomosynthesis, pelvic transvaginal ultrasound, hormonal mapping, and DEXA bone densitometry.',
    category: 'wellness',
    tests: ['Hologic 3D digital breast tomosynthesis (mammography with AI CAD)', 'High-resolution transvaginal & transabdominal pelvic ultrasound', 'Hologic Horizon DEXA hip & spine bone mineral densitometry', 'Complete female hormone panel: Estradiol, Progesterone, DHEA-S, AMH', 'Gynaecologist consultative review & personalised care roadmap'],
    duration: '4 hours',
    turnaround: 'Same day private consultation & findings review',
    preparation: 'Best scheduled between days 5-10 of menstrual cycle. Fasting not required for scans.',
    fee: '₹9,800',
    suitableFor: 'Women seeking preventative screening, peri-menopause guidance, or bone health audit.'
  },
  {
    id: 'mens-vitality',
    code: '09 / CHECKUP',
    title: 'Men’s Preventative Health & Endocrine Screen',
    tagline: 'Total & free testosterone bio-availability, prostate mpMRI / free PSA ratio, and vascular endothelial audit.',
    category: 'wellness',
    tests: ['High-sensitivity prostate screening: Total & Free PSA with % ratio', 'Comprehensive andrology panel: Total & Free Testosterone, SHBG, LH, Prolactin', 'High-definition transabdominal urinary tract & bladder ultrasound', 'Endothelial peripheral arterial tonometry (EndoPAT) vascular tone check', 'Senior Urologist / Men’s Health Physician debrief'],
    duration: '3 hours',
    turnaround: 'Same day private debrief',
    preparation: 'Morning phlebotomy between 07:30 and 09:30 AM for peak testosterone accuracy.',
    fee: '₹6,400',
    suitableFor: 'Men > 38 evaluating hormonal balance, prostate surveillance, or energy restoration.'
  },
  {
    id: 'pulmonary-environmental',
    code: '10 / CHECKUP',
    title: 'Pulmonary Function & Environmental Health',
    tagline: 'Body plethysmography, diffusion capacity (DLCO), fractional exhaled nitric oxide (FeNO), and low-dose chest CT.',
    category: 'specialized',
    tests: ['SensorMedics body plethysmography lung volumes & airway resistance', 'Carbon monoxide single-breath diffusing capacity (DLCO)', 'Fractional exhaled nitric oxide (FeNO) eosinophilic inflammation check', 'Ultra-low radiation 640-slice volumetric chest CT', 'Pulmonologist environmental & respiratory consultation'],
    duration: '2.5 hours',
    turnaround: 'Same day with spirometry printout & CT interpretation',
    preparation: 'Avoid bronchodilator inhalers 6 hours prior if advised. No smoking 4 hours prior.',
    fee: '₹6,200',
    suitableFor: 'Individuals exposed to urban air pollution, post-viral respiratory symptoms, or asthma.'
  },
  {
    id: 'musculoskeletal-spine',
    code: '11 / CHECKUP',
    title: 'Spine, Joint & Postural Biomechanics',
    tagline: 'EOS ultra-low dose whole-body weight-bearing radiography, dynamic 3D gait analysis, and spine MRI.',
    category: 'imaging',
    tests: ['EOS whole-body biplanar standing orthopaedic radiography', '3D sensor-instrumented treadmill dynamic gait & foot plantar pressure mapping', 'Targeted 3T MRI of lumbar or cervical spine', 'DEXA regional appendicular skeletal muscle mass index (ASMI)', 'Orthopaedic & Sports Physician evaluation with corrective exercise prescription'],
    duration: '3.5 hours',
    turnaround: 'Same day functional biomechanical report',
    preparation: 'Wear athletic shorts and supportive training shoes for gait analysis.',
    fee: '₹8,900',
    suitableFor: 'Chronic lower back / neck tension, runners, athletes, or pre-arthritic joint discomfort.'
  },
  {
    id: 'advanced-genomics',
    code: '12 / CHECKUP',
    title: 'Pharmacogenomics & Hereditary Risk Sequencing',
    tagline: 'Whole-exome clinical sequencing targeting 147 actionable hereditary conditions and 320 drug metabolic pathways.',
    category: 'specialized',
    tests: ['Next-Generation Sequencing (NGS) covering ACMG 73 actionable disease genes', 'Comprehensive CPIC Level 1A/1B pharmacogenomic drug-gene compatibility panel', 'Polygenic Risk Scores (PRS) for CAD, Type 2 Diabetes, and common malignancies', 'Dedicated pre- and post-test genetic counseling with Medical Geneticist', 'Lifetime encrypted digital genomic record (BAM & VCF files available)'],
    duration: '45-minute phlebotomy & intake · 60-minute genetic counseling session',
    turnaround: '14 to 21 calendar days for bioinformatic analysis',
    preparation: 'Simple venous blood draw or buccal swab. No fasting needed.',
    fee: '₹22,000',
    suitableFor: 'Individuals wanting precision medication safety or proactive genetic prevention.'
  }
];

// ================= 2. COMPREHENSIVE FACULTY SPECIALISTS (ALL DEPARTMENTS) =================
const SPECIALISTS = [
  {
    id: 'suniti-rao',
    name: 'Dr. Suniti Rao',
    department: 'Cardiac Sciences',
    title: 'Director — Interventional Cardiology & Heart Failure',
    experience: '20 years Senior Consultant',
    credentials: ['MBBS', 'MD (Medicine)', 'DM (Cardiology, AIIMS)', 'FACC (USA)'],
    fellowships: ['Mount Sinai Heart, New York', 'National Heart Centre, Singapore'],
    focus: ['Complex Coronary Interventions', 'Radial Angioplasty', 'Heart Failure Management'],
    availability: 'Mon to Fri (OPD Suite 204) · 24/7 Primary Angioplasty On-call',
    bio: 'Lead interventional cardiologist directing the acute coronary and EMR console workflows. Over 2,800 coronary interventions with a focus on transradial approaches.',
    avatarBg: '#E8F1F5',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="50" r="48" fill="#F3E9DF" />
        <path d="M 50 20 C 35 20 28 35 28 55 C 28 75 35 85 50 85 C 65 85 72 75 72 55 C 72 35 65 20 50 20 Z" fill="#E2BA96" />
        <path d="M 28 34 C 28 18 42 14 50 14 C 58 14 72 18 72 34 C 65 24 55 22 50 22 C 45 22 35 24 28 34 Z" fill="#2B2118" />
        <circle cx="43" cy="45" r="3" fill="#1C1814" />
        <circle cx="57" cy="45" r="3" fill="#1C1814" />
        <path d="M 46 57 Q 50 61 54 57" stroke="#7A4E38" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 22 95 C 22 72 35 65 50 65 C 65 65 78 72 78 95 Z" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="1.5" />
        <path d="M 42 65 L 50 78 L 58 65 Z" fill="#0284C7" />
        <path d="M 36 70 C 36 84 40 88 50 88 C 60 88 64 84 64 70" stroke="#0F172A" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <circle cx="50" cy="88" r="4.5" fill="#94A3B8" stroke="#0F172A" stroke-width="1.5" />
      </svg>
    </div>`
  },
  {
    id: 'anika-rao',
    name: 'Dr. Anika Rao',
    department: 'Cardiac Sciences',
    title: 'Director — Structural Heart & TAVI',
    experience: '22 years Senior Consultant',
    credentials: ['MBBS (Hons)', 'MD (Cardiology)', 'FRCP (London)', 'FACC (USA)'],
    fellowships: ['Royal Brompton & Harefield NHS Trust, London', 'Cleveland Clinic Cardiovascular Institute, Ohio'],
    focus: ['Complex Coronary Interventions', 'TAVI Valve Therapies', 'Preventive Cardiology'],
    availability: 'Mon, Wed, Fri (Clinic) · Tue, Thu (Operating)',
    bio: 'Pioneered transcatheter aortic valve implantation pathways with over 1,400 successful interventions. Directs the structural heart team at Lumière.',
    avatarBg: '#EBE5DC',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24 text-[#3E3832]">
        <circle cx="50" cy="35" r="20" fill="#DDBB99" />
        <path d="M30 30 C30 15 70 15 70 30 C65 20 50 18 30 30 Z" fill="#4A3B32" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M46 44 Q50 48 54 44" stroke="#7A4E38" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#1F3A34" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
        <path d="M38 60 C38 75 42 80 50 80 C58 80 62 75 62 60" stroke="#1F1E1D" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
    </div>`
  },
  {
    id: 'rohan-mehra',
    name: 'Dr. Rohan Mehra',
    department: 'Oncology',
    title: 'Head — Medical Oncology & Immunotherapy',
    experience: '18 years Senior Consultant',
    credentials: ['MBBS', 'MD (Medicine)', 'DM (Medical Oncology)', 'ESMO Certified'],
    fellowships: ['Memorial Sloan Kettering Cancer Center, New York', 'Gustave Roussy Institute, Paris'],
    focus: ['Precision Oncology', 'Immunotherapy & CAR-T', 'Gastrointestinal & Thoracic Tumours'],
    availability: 'Daily Multidisciplinary Tumour Board · Consults Tue to Sat',
    bio: 'Recognized authority on genomics-directed targeted cancer therapies. Advocates for whole-person oncology with rigorous evidence-based protocols.',
    avatarBg: '#F2D7D5',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24 text-[#3E3832]">
        <circle cx="50" cy="35" r="20" fill="#EDC9AF" />
        <path d="M30 30 C30 15 70 15 70 30 C60 20 45 20 30 30 Z" fill="#2C3E50" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <rect x="36" y="29" width="13" height="10" rx="3" fill="none" stroke="#1F1E1D" stroke-width="1.5" />
        <rect x="51" y="29" width="13" height="10" rx="3" fill="none" stroke="#1F1E1D" stroke-width="1.5" />
        <line x1="49" y1="34" x2="51" y2="34" stroke="#1F1E1D" stroke-width="1.5" />
        <path d="M46 44 Q50 48 54 44" stroke="#7A4E38" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#2C3E50" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'devashish-sen',
    name: 'Dr. Devashish Sen',
    department: 'Oncology',
    title: 'Senior Consultant — Robotic Surgical Oncology',
    experience: '17 years Consultant',
    credentials: ['MBBS', 'MS (Surgery)', 'MCh (Surgical Oncology)', 'FACS'],
    fellowships: ['Tata Memorial Hospital, Mumbai', 'MD Anderson Cancer Center, Houston'],
    focus: ['Robotic Thoracic Surgery', 'Minimally Invasive GI Oncology', 'Peritoneal Surface Malignancy'],
    availability: 'Mon, Wed, Fri (Robotic Theatres) · Tue, Thu (Clinic)',
    bio: 'Pioneered da Vinci robotic resections for esophageal and lung malignancies with rapid post-op return to functional quality of life.',
    avatarBg: '#E8D8E8',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="35" r="20" fill="#E6BA95" />
        <path d="M30 30 C30 15 70 15 70 30 C60 20 40 20 30 30 Z" fill="#3D3A36" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#4A154B" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'iyla-fernandes',
    name: 'Dr. Iyla Fernandes',
    department: 'Neurosciences',
    title: 'Director — Neurosurgery & Functional Mapping',
    experience: '19 years Senior Consultant',
    credentials: ['MS (Surgery)', 'MCh (Neurosurgery)', 'FINR (Switzerland)', 'FRCS (Edin)'],
    fellowships: ['Hopital Lariboisiere, Paris', 'Addenbrookes Hospital, Cambridge University'],
    focus: ['Awake Craniotomy', 'Endovascular Stroke Intervention', 'Skull Base Surgery'],
    availability: 'Mon, Thu, Sat (Clinic) · 24/7 Hyperacute On-call',
    bio: 'Lead neurosurgeon renowned for awake functional cortical mapping during brain tumor resection, preserving speech and motor pathways with millimeter accuracy.',
    avatarBg: '#D4E6F1',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24 text-[#3E3832]">
        <circle cx="50" cy="35" r="20" fill="#F5CBA7" />
        <path d="M30 35 C30 15 70 15 70 35 C65 20 45 20 30 35 Z" fill="#1B2631" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <rect x="36" y="29" width="13" height="10" rx="3" fill="none" stroke="#1F1E1D" stroke-width="1.5" />
        <rect x="51" y="29" width="13" height="10" rx="3" fill="none" stroke="#1F1E1D" stroke-width="1.5" />
        <line x1="49" y1="34" x2="51" y2="34" stroke="#1F1E1D" stroke-width="1.5" />
        <path d="M46 44 Q50 48 54 44" stroke="#7A4E38" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#1A5276" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'arundhati-ghosh',
    name: 'Dr. Arundhati Ghosh',
    department: 'Neurosciences',
    title: 'Lead Consultant — Stroke Neurology & Cognitive Health',
    experience: '16 years Consultant',
    credentials: ['MBBS', 'MD (Medicine)', 'DM (Neurology, NIMHANS)', 'MRCP (UK)'],
    fellowships: ['John Radcliffe Hospital, Oxford', 'NIMHANS Cognitive Disorders Unit'],
    focus: ['Hyperacute Ischemic Stroke', 'Memory Disorders & MoCA', 'Neuro-Immunology'],
    availability: 'Daily Stroke Rapid Triage · Consults Mon, Wed, Fri',
    bio: 'Oversees the hyperacute stroke tenecteplase protocol and cognitive restoration protocols, partnering with imaging to achieve rapid door-to-needle times.',
    avatarBg: '#E0E7FF',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="35" r="20" fill="#E2BA96" />
        <path d="M30 30 C30 15 70 15 70 30 C65 20 45 20 30 30 Z" fill="#1E1B4B" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#312E81" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'karan-iyer',
    name: 'Dr. Karan Iyer',
    department: 'Orthopaedics & Spine',
    title: 'Head — Orthopaedics & Spine Reconstruction',
    experience: '20 years Senior Consultant',
    credentials: ['MS Orth (Gold Medal)', 'MCh Orth (Dundee)', 'FICS', 'FASIS'],
    fellowships: ['Orthopaedic Hospital Vienna', 'Stanford University Spine & Joint Centre'],
    focus: ['Mako Robotic Arthroplasty', 'Endoscopic Spinal Decompression', 'Complex Revision Surgery'],
    availability: 'Tue, Thu (Consultations) · Mon, Wed (Robotic Theatres)',
    bio: 'Certified master instructor in robotic knee and hip arthroplasty. Has performed over 3,000 joint reconstructions with a focus on rapid mobilization within 4 hours.',
    avatarBg: '#FCF3CF',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24 text-[#3E3832]">
        <circle cx="50" cy="35" r="20" fill="#E0AC69" />
        <path d="M30 30 C30 15 70 15 70 30 C60 20 45 20 30 30 Z" fill="#566573" />
        <path d="M38 38 C38 48 44 52 50 52 C56 52 62 48 62 38 Z" fill="#566573" />
        <circle cx="43" cy="33" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="33" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#34495E" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'rajesh-varma',
    name: 'Dr. Rajesh Varma',
    department: 'Gastroenterology',
    title: 'Director — Advanced Endoscopy & Hepatology',
    experience: '21 years Senior Consultant',
    credentials: ['MBBS', 'MD (Medicine)', 'DM (Gastroenterology, SGPGI)', 'FACG'],
    fellowships: ['Johns Hopkins Hospital, Baltimore', 'University of Tokyo Endoscopy Unit'],
    focus: ['Therapeutic EUS & ERCP', 'Third Space Endoscopy (POEM/ESD)', 'Liver Elastography'],
    availability: 'Daily Endoscopy Pavilion A · Consultations Mon to Fri',
    bio: 'Pioneered scarless endoluminal surgery and advanced pancreatico-biliary interventions with over 6,000 endoscopic procedures performed.',
    avatarBg: '#DCFCE7',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="35" r="20" fill="#E2BA96" />
        <path d="M30 30 C30 15 70 15 70 30 C65 20 45 20 30 30 Z" fill="#1C1917" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#166534" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'arvind-swaminathan',
    name: 'Dr. Arvind Swaminathan',
    department: 'Pediatrics',
    title: 'Chief — Pediatric Critical Care & Neonatal Sanctuary',
    experience: '18 years Senior Consultant',
    credentials: ['MBBS', 'MD (Pediatrics, PGI)', 'DNB (Neonatology)', 'FAAP (USA)'],
    fellowships: ['Boston Children’s Hospital, Harvard', 'The Hospital for Sick Children, Toronto'],
    focus: ['Extremely Low Birth Weight Care', 'Pediatric Neuro-Intensive Care', 'Advanced Ventilation'],
    availability: '24/7 Level 3 NICU/PICU · OPD Consultations Tue, Thu, Sat',
    bio: 'Dedicated to family-centered neonatal and pediatric intensive care, achieving exceptional developmental outcomes for high-risk neonates.',
    avatarBg: '#FEF3C7',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="35" r="20" fill="#E8B890" />
        <path d="M30 30 C30 15 70 15 70 30 C65 20 45 20 30 30 Z" fill="#3D3A36" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#92400E" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'priya-nambiar',
    name: 'Dr. Priya Nambiar',
    department: 'Women\'s Health',
    title: 'Director — High-Risk Obstetrics & Maternal-Fetal Medicine',
    experience: '21 years Senior Consultant',
    credentials: ['MBBS', 'MD (OBGYN)', 'FRCOG (London)', 'FICOG'],
    fellowships: ['St George’s Hospital Fetal Medicine Unit, London', 'National University Hospital, Singapore'],
    focus: ['Fetal Medicine & Advanced 4D Scans', 'High-Risk Pregnancy', 'Minimally Invasive Gynaecology'],
    availability: 'Mon to Sat (Maternity & Fetal Suite B)',
    bio: 'Specialist in complex maternal-fetal medicine, managing multiple gestations, gestational diabetes, and prenatal genetic counseling.',
    avatarBg: '#FCE7F3',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="35" r="20" fill="#F3C5A8" />
        <path d="M30 30 C30 15 70 15 70 30 C65 20 45 20 30 30 Z" fill="#18181B" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#9D174D" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  },
  {
    id: 'shalini-mukherjee',
    name: 'Dr. Shalini Mukherjee',
    department: 'Pulmonology',
    title: 'Director — Interventional Pulmonology & Sleep Medicine',
    experience: '17 years Senior Consultant',
    credentials: ['MBBS', 'MD (Pulmonary Medicine)', 'DM (Pulmonary & Critical Care)', 'FCCP'],
    fellowships: ['Royal Brompton Hospital, London', 'Thoraxklinik, Heidelberg University'],
    focus: ['EBUS-TBNA Cryobiopsy', 'Rigid Bronchoscopy & Airway Stents', 'Polysomnography & Sleep Apnea'],
    availability: 'Mon, Wed, Fri (Clinic) · Tue, Thu (Bronchoscopy Suite)',
    bio: 'Lead interventional pulmonologist specializing in navigational bronchoscopy, endobronchial ultrasound, and clinical sleep architecture optimization.',
    avatarBg: '#E0F2FE',
    avatarHtml: `<div class="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 100 100" class="w-24 h-24">
        <circle cx="50" cy="35" r="20" fill="#E5BD98" />
        <path d="M30 30 C30 15 70 15 70 30 C65 20 45 20 30 30 Z" fill="#0C4A6E" />
        <circle cx="43" cy="34" r="2.5" fill="#1F1E1D" />
        <circle cx="57" cy="34" r="2.5" fill="#1F1E1D" />
        <path d="M25 85 C25 60 40 55 50 55 C60 55 75 60 75 85 Z" fill="#0369A1" />
        <path d="M42 55 L50 68 L58 55 Z" fill="#FFFFFF" />
      </svg>
    </div>`
  }
];

// ================= 3. EIGHT MEDICAL FACULTIES (FACILITIES DATA) =================
const FACILITIES_DATA = [
  {
    id: 'imaging',
    badge: 'LEVEL 1 · WING B',
    title: 'Diagnostic Imaging Penthouse',
    description: 'Acoustically isolated imaging suites designed with natural skylights and circadian lighting, eliminating clinical anxiety during high-field MRI and ultra-low radiation CT scans.',
    acoustics: '< 34 dB(A) whisper quiet cabin',
    airQuality: '100% fresh conditioned air with HEPA-14 filtration',
    lighting: 'Simulated circadian sky ceilings & warm timber louvers',
    equipment: 'Siemens Magnetom Vida 3T MRI & Somatom Force 640-slice dual source CT',
    features: ['Sub-second cardiac temporal resolution (0.28s)', 'Silent scan acoustic damping sequences', 'Private ensuite changing lounges with valet intake', 'Same-day radiologist consultative review']
  },
  {
    id: 'modular-ors',
    badge: 'LEVEL 3 · THEATRES 1-14',
    title: 'Robotic Surgical Cleanroom Theatres',
    description: 'Fourteen modular surgical cleanrooms engineered with laminar air flow, integrated 4K 3D fluoroscopy, and robotic surgical consoles allowing micron-level dexterity.',
    acoustics: 'Anti-fatigue ergonomic sound conditioning',
    airQuality: 'ISO Class 5 sterile cleanroom · 28 Air Changes/hr',
    lighting: 'Sterile surgical LED luminaires with shadow-erasing optics',
    equipment: 'Mako Robotic Arm, da Vinci Xi Robotic System, Zeiss Kinevo 900 Microscope',
    features: ['Positive pressure clean air barriers', 'Ultra-fast equipment transition docks', 'Integrated surgical tele-pathology freeze sections', 'Family consultation gallery']
  },
  {
    id: 'hybrid-cath-lab',
    badge: 'LEVEL 2 · SUITE ALPHA',
    title: 'Hybrid Biplane Endovascular Cath Lab',
    description: 'Ultra-low radiation biplane angiographic suite designed for simultaneous structural cardiac, neuro-interventional stroke, and peripheral endovascular procedures.',
    acoustics: 'Acoustic wall dampers minimizing procedural stress',
    airQuality: 'ISO Class 6 laminar clean air delivery',
    lighting: 'Variable wavelength surgical green/white lighting',
    equipment: 'Philips Azurion 7 Biplane, Volcano IVUS, iFR Co-registration, Rotablator',
    features: ['Zero-contrast radiation sparing ClarityIQ technology', 'Instant fractional flow reserve (FFR/iFR) integration', 'Direct CCU bridge corridor (15-second transit)', '24/7 Primary PTCA emergency team on campus']
  },
  {
    id: 'inpatient-suites',
    badge: 'LEVELS 4-7 · RECOVERY',
    title: 'Acoustic Sanctuary Inpatient Suites',
    description: 'Single-occupancy patient rooms detailed in warm Nordic timber, acoustic baffles, and private family lounges, engineered to accelerate physiological restorative sleep.',
    acoustics: 'Triple-glazed acoustic decoupling (< 30 dB interior)',
    airQuality: 'Continuous UV-C air disinfection & humidity optimization',
    lighting: 'Biophilic circadian lighting supporting melatonin rhythm',
    equipment: 'Non-invasive continuous radar vital signs monitoring',
    features: ['In-suite family Murphy bed & private work desk', 'Organic chef-curated nutrition room service', 'Private ensuite bathroom with low-threshold walk-in shower', 'Direct nursing call with 60-second response guarantee']
  },
  {
    id: 'day-clinic',
    badge: 'GROUND FLOOR · PAVILION',
    title: 'Rapid Outpatient Multi-Specialty Pavilions',
    description: 'Thoughtfully sequenced consultation salons eliminating institutional waiting room crowding, with direct pneumatic tube labs and adjacent procedure suites.',
    acoustics: 'Sound-masking white noise & soft acoustic textiles',
    airQuality: '100% single-pass displacement ventilation',
    lighting: 'Diffused daylight through courtyard garden atrium',
    equipment: 'Point-of-care ultrasound (POCUS) & digital diagnostic cart',
    features: ['Zero waiting room policy — direct to suite', 'Private consultation & examination separation', 'On-floor phlebotomy & specimen collection', 'Valet arrival and departure gate']
  },
  {
    id: 'genomics-core',
    badge: 'LEVEL 1 · CORE LAB',
    title: 'NGS Molecular Genomics & Liquid Biopsy Core',
    description: 'State-of-the-art sequencing facility delivering clinical whole-exome sequencing, hereditary risk profiling, and pharmacogenomics in-house.',
    acoustics: 'Vibration-isolated optical optical tables',
    airQuality: 'Positive/negative pressure PCR clean containment zones',
    lighting: 'UV-C sterilization decontamination cycling',
    equipment: 'Illumina NovaSeq X Plus, Bio-Rad QX600 Droplet Digital PCR',
    features: ['Pharmacogenomic metabolizer typing in 48 hours', 'Circulating tumor ctDNA liquid biopsy detection', 'Automated robotic liquid handling pipetting stations', 'Direct integration with physician EMR prescribing screen']
  },
  {
    id: 'neonatal-picu',
    badge: 'LEVEL 4 · MATERNAL WING',
    title: 'Pediatric & Level 3 Neonatal Intensive Sanctuary',
    description: 'Advanced neonatal and pediatric critical care pavilion with private kangaroo-care family bays, silent acoustic monitoring, and specialized micro-climate incubators.',
    acoustics: 'Sound meters maintaining < 45 dB neonatal nursery standards',
    airQuality: 'HEPA-14 positive pressure air filtration',
    lighting: 'Adjustable day-night simulated diurnal cycle lighting',
    equipment: 'Dräger Babylog VN500 High-Frequency Oscillatory Ventilator, Giraffe Omnibed',
    features: ['24/7 in-room parent stay and bonding pods', 'Bedside amplitude-integrated EEG brain monitoring', 'In-suite mother’s milk bank & pasteurization lounge', 'Dedicated pediatric rapid response resuscitation team']
  },
  {
    id: 'cellular-oncology',
    badge: 'LEVEL 5 · ONCOLOGY PAVILION',
    title: 'Comprehensive Day Oncology & Cellular Therapy Lounge',
    description: 'Sunlit infusion pods facing landscaped botanical gardens, engineered for chemotherapy, targeted monoclonal infusions, and CAR-T cellular therapy recovery.',
    acoustics: 'Personal noise-canceling headsets & ambient nature sounds',
    airQuality: 'Cleanroom ISO 7 infusion suites with continuous air change',
    lighting: 'Warm daylight glazing with automated glare shading',
    equipment: 'Alaris Smart Pump closed-loop infusion stations, Scalp Cooling Systems',
    features: ['Ergonomic heated infusion recliners with private entertainment screens', 'Cold cap therapy preventing chemotherapy-induced alopecia', 'On-unit clinical oncology pharmacist for instant drug compounding', 'Direct nursing ratio 1:2 ensuring compassionate vigilant safety']
  }
];

// ================= 4. DOCTOR OPD PATIENT QUEUE DATA =================
let DOCTOR_QUEUE = [
  { id: 'p1', token: '01', name: 'Vikram Sharma', uhid: 'LUM-BLR-2026-8942', age: '42 Yrs', gender: 'Male', reason: 'Routine Executive Cardiac Audit & Calcium Score Review', time: '09:30 AM', status: 'In Consultation', bp: '118/76', hr: '68 bpm', spo2: '99%', bs: '86 mg/dL', bmi: '23.4 kg/m²', temp: '98.4 °F', blood: 'O+ve', corp: 'Infosys Executive Health' },
  { id: 'p2', token: '02', name: 'Meera Iyer', uhid: 'LUM-BLR-2026-9104', age: '58 Yrs', gender: 'Female', reason: 'Exertional Angina & Holter Telemetry Review', time: '10:15 AM', status: 'Waiting', bp: '134/86', hr: '76 bpm', spo2: '98%', bs: '112 mg/dL', bmi: '25.8 kg/m²', temp: '98.6 °F', blood: 'B+ve', corp: 'State Bank of India' },
  { id: 'p3', token: '03', name: 'Rajesh Nambiar', uhid: 'LUM-BLR-2026-8431', age: '64 Yrs', gender: 'Male', reason: 'Post-LAD Stenting 6-Month Angiographic Follow-up', time: '11:00 AM', status: 'Waiting', bp: '122/78', hr: '64 bpm', spo2: '99%', bs: '94 mg/dL', bmi: '24.1 kg/m²', temp: '98.4 °F', blood: 'A+ve', corp: 'Private Insurance' },
  { id: 'p4', token: '04', name: 'Ananya Sengupta', uhid: 'LUM-BLR-2026-9552', age: '36 Yrs', gender: 'Female', reason: 'Paroxysmal Supraventricular Tachycardia (PSVT) Workup', time: '11:45 AM', status: 'Labs Pending', bp: '110/70', hr: '88 bpm', spo2: '100%', bs: '82 mg/dL', bmi: '21.7 kg/m²', temp: '98.2 °F', blood: 'AB+ve', corp: 'Wipro Technologies' },
  { id: 'p5', token: '05', name: 'Devika Nair', uhid: 'LUM-BLR-2026-7910', age: '29 Yrs', gender: 'Female', reason: 'Pre-Employment Comprehensive Health Screen', time: '12:30 PM', status: 'Completed', bp: '114/72', hr: '70 bpm', spo2: '99%', bs: '80 mg/dL', bmi: '22.0 kg/m²', temp: '98.4 °F', blood: 'O-ve', corp: 'Google India' },
  { id: 'p6', token: '06', name: 'Harish Chandra', uhid: 'LUM-BLR-2026-6208', age: '71 Yrs', gender: 'Male', reason: 'Severe Calcific Aortic Stenosis TAVI Workup', time: '01:00 PM', status: 'Completed', bp: '128/82', hr: '62 bpm', spo2: '97%', bs: '104 mg/dL', bmi: '26.2 kg/m²', temp: '98.5 °F', blood: 'B+ve', corp: 'Senior Citizen Pass' }
];

// ================= 5. CLINICAL LAB BIOMARKERS DATA =================
let LAB_BIOMARKERS = [
  { name: 'HbA1c (Glycated Hemoglobin)', result: '5.2 %', range: '4.0 – 5.6 %', status: 'Optimal', category: 'metabolic', trend: '↓ 0.2%' },
  { name: 'Fasting Blood Glucose', result: '86 mg/dL', range: '70 – 99 mg/dL', status: 'Optimal', category: 'metabolic', trend: 'Stable' },
  { name: 'Apolipoprotein B (ApoB)', result: '64 mg/dL', range: '< 80 mg/dL', status: 'Optimal', category: 'inflammation', trend: '↓ 6 mg/dL' },
  { name: 'LDL-C (Direct Enzymatic)', result: '84 mg/dL', range: '< 100 mg/dL', status: 'Optimal', category: 'metabolic', trend: '↓ 8 mg/dL' },
  { name: 'HDL-C (Cardioprotective)', result: '68 mg/dL', range: '> 50 mg/dL', status: 'Optimal', category: 'metabolic', trend: '↑ 3 mg/dL' },
  { name: 'Total Cholesterol', result: '178 mg/dL', range: '< 200 mg/dL', status: 'In Range', category: 'metabolic', trend: 'Stable' },
  { name: 'Triglycerides (Fasting)', result: '92 mg/dL', range: '< 150 mg/dL', status: 'Optimal', category: 'metabolic', trend: 'Stable' },
  { name: 'hs-CRP (High-Sensitivity CRP)', result: '0.4 mg/L', range: '< 1.0 mg/L', status: 'Optimal', category: 'inflammation', trend: '↓ 0.3 mg/L' },
  { name: 'eGFR (CKD-EPI Formula)', result: '> 90 mL/min', range: '> 60 mL/min', status: 'Optimal', category: 'endocrine', trend: 'Stable' },
  { name: 'TSH (3rd Gen Sensitive)', result: '1.84 mIU/L', range: '0.40 – 4.00 mIU/L', status: 'Optimal', category: 'endocrine', trend: 'Stable' },
  { name: '25-OH Total Vitamin D', result: '52 ng/mL', range: '40 – 70 ng/mL', status: 'Optimal', category: 'endocrine', trend: '↑ 14 ng/mL' }
];

// ================= 6. CENTRAL SYNCHRONIZED HEALTH PORTAL STATE =================
const HEALTH_PORTAL_STATE = {
  activePatient: {
    id: 'p1',
    token: '01',
    name: 'Vikram Sharma',
    uhid: 'LUM-BLR-2026-8942',
    age: '42 Yrs',
    gender: 'Male',
    blood: 'O+ Positive',
    doctor: 'Dr. Suniti Rao, MD, DM',
    phone: '+91 98765 43210',
    corporate: 'Infosys Executive Health'
  },
  vitals: {
    bp: '118/76',
    hr: '68 bpm',
    spo2: '99%',
    sugar: '86 mg/dL',
    bmi: '23.4 kg/m²',
    temp: '98.4 °F'
  },
  prescriptions: [
    {
      name: 'Telmisartan 40 mg',
      dose: '1 Tab OD (Morning, after breakfast)',
      duration: '90 Days',
      indication: 'Essential Hypertension Control',
      prescriber: 'Dr. Suniti Rao, MD, DM',
      status: 'Digitally Signed & Synced to Campus Pharmacy'
    },
    {
      name: 'Atorvastatin 10 mg',
      dose: '1 Tab OD (Bedtime, after dinner)',
      duration: '90 Days',
      indication: 'Plaque Stabilization & Primary Prevention',
      prescriber: 'Dr. Suniti Rao, MD, DM',
      status: 'Digitally Signed & Synced to Campus Pharmacy'
    },
    {
      name: 'Coenzyme Q10 (Ubiquinol) 100 mg',
      dose: '1 Cap OD (Morning with food)',
      duration: '90 Days',
      indication: 'Mitochondrial & Cardiac Optimization',
      prescriber: 'Dr. Suniti Rao, MD, DM',
      status: 'Digitally Signed & Synced to Campus Pharmacy'
    }
  ],
  soapNotes: {
    subjective: "42-year-old software executive presenting for scheduled cardiovascular audit. Patient reports feeling energetic with zero dyspnea on exertion, no angina, orthopnea, or nocturnal palpitations. Complies with 35-min morning brisk walk 5 days weekly. Denies smoking or family premature CAD.",
    objective: "General: Well-nourished, comfortable, no distress. JVP normal. Bilateral carotid upstrokes brisk without bruits. Cardiovascular: S1, S2 clear, normal split, no S3/S4, no ejection click or regurgitant murmur. Respiratory: Vesicular breath sounds throughout, no crackles or wheezes. Extremities: Zero pedal edema.",
    assessment: "1. Low 10-year cardiovascular ASCVD risk (< 2.4%). 2. Agatston Coronary Calcium Score = 0 (Siemens 640-CT Somatom Force). 3. Glycated hemoglobin HbA1c 5.2% and ApoB 64 mg/dL within optimal targets.",
    plan: "Maintain Mediterranean diet and current aerobic regimen. Continue CoQ10 100mg and Omega-3 1000mg. Repeat routine lipid profile & hs-CRP in 12 months. Routine annual executive checkup scheduled for October 2027.",
    lifestyleAdvice: "Maintain Mediterranean diet pattern; brisk aerobic walking 35 mins/day, 5 days weekly. Keep blood pressure monitored quarterly. Annual executive cardiovascular screening re-check scheduled for October 2027.",
    timestamp: "Oct 10, 2026, 09:42 AM",
    signedBy: "Dr. Suniti Rao, MD, DM"
  },
  labOrders: [
    'Comprehensive Lipid Profile with ApoB & Lp(a)',
    'Glycated Hemoglobin (HbA1c HPLC)',
    'High-Sensitivity C-Reactive Protein (hs-CRP)'
  ],
  chatMessages: [
    {
      sender: 'patient',
      text: "Good morning Dr. Rao. I wanted to verify if it is fine to take CoQ10 along with my morning breakfast or on an empty stomach?",
      time: "08:45 AM"
    },
    {
      sender: 'doctor',
      text: "Good morning Vikram. Please take CoQ10 with your breakfast as it is fat-soluble and absorbs significantly better with meals. Your resting vitals this morning look optimal.",
      time: "08:52 AM"
    },
    {
      sender: 'patient',
      text: "Understood doctor. Thank you! Looking forward to reviewing the 640-CT coronary calcium score.",
      time: "09:05 AM"
    },
    {
      sender: 'doctor',
      text: "Your Calcium Score is 0 (Agatston 0) with 100% patent coronary vessels on 640-CT Somatom Force. Excellent result. I have updated your EMR case sheet and prescriptions.",
      time: "09:40 AM"
    }
  ],
  encounterTimerSeconds: 862
};

// ================= APP STATE VARIABLES =================
let currentCategory = 'all';
let currentSearch = '';
let currentSpecialistFilter = 'all';
let selectedPackage = null;
let selectedDoctor = null;
let encounterTimerInterval = null;

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  renderCheckupCards();
  renderSpecialists();
  renderFacility(0);
  renderDoctorQueue();
  renderLabResults('all');
  renderPatientPrescriptions();
  renderChatMessages();
  syncAllPortals();
  startEncounterTimer();
  setupEventListeners();
  setupPortalEventListeners();
  setupDoctorPortalEventListeners();
  setupPatientProfileSwitcher();
  setupQuickPrescribing();
  setupSoapTemplates();
  initHashRouter();
});

// Load state from localStorage if available
function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem('LUMIERE_HEALTH_PORTAL_STATE');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.vitals) Object.assign(HEALTH_PORTAL_STATE.vitals, parsed.vitals);
      if (parsed.prescriptions) HEALTH_PORTAL_STATE.prescriptions = parsed.prescriptions;
      if (parsed.soapNotes) Object.assign(HEALTH_PORTAL_STATE.soapNotes, parsed.soapNotes);
      if (parsed.labOrders) HEALTH_PORTAL_STATE.labOrders = parsed.labOrders;
      if (parsed.chatMessages) HEALTH_PORTAL_STATE.chatMessages = parsed.chatMessages;
      if (parsed.activePatient) Object.assign(HEALTH_PORTAL_STATE.activePatient, parsed.activePatient);
    }
  } catch (e) {
    console.warn('Storage sync initialized with defaults', e);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem('LUMIERE_HEALTH_PORTAL_STATE', JSON.stringify(HEALTH_PORTAL_STATE));
  } catch (e) {
    console.warn('Failed to save to storage', e);
  }
}

// ================= SYNCHRONIZATION ENGINE =================
function syncAllPortals() {
  // Update Patient Portal Identity Header
  const p = HEALTH_PORTAL_STATE.activePatient;
  const nameEl = document.getElementById('patientPortalName');
  const uhidEl = document.getElementById('patientPortalUHID');
  const bloodEl = document.getElementById('patientPortalBlood');
  const doctorEl = document.getElementById('patientPortalDoctor');
  const dossierName = document.getElementById('patientDossierName');
  const dossierId = document.getElementById('patientDossierId');

  if (nameEl) nameEl.textContent = p.name;
  if (uhidEl) uhidEl.textContent = p.uhid;
  if (bloodEl) bloodEl.textContent = p.blood;
  if (doctorEl) doctorEl.textContent = p.doctor;
  if (dossierName) dossierName.textContent = p.name;
  if (dossierId) dossierId.textContent = p.uhid;

  // Update Patient Overview Synced Vitals
  const v = HEALTH_PORTAL_STATE.vitals;
  const bpEl = document.getElementById('patientOverviewVitalsBP');
  const hrEl = document.getElementById('patientOverviewVitalsHR');
  const spo2El = document.getElementById('patientOverviewVitalsSPO2');
  const sugarEl = document.getElementById('patientOverviewVitalsSugar');
  const bmiEl = document.getElementById('patientOverviewVitalsBMI');

  if (bpEl) bpEl.textContent = v.bp;
  if (hrEl) hrEl.textContent = v.hr;
  if (spo2El) spo2El.textContent = v.spo2;
  if (sugarEl) sugarEl.textContent = v.sugar;
  if (bmiEl) bmiEl.textContent = v.bmi;

  // Update Doctor EMR Vitals
  const emrBp = document.getElementById('emrVitalsBP');
  const emrHr = document.getElementById('emrVitalsHR');
  const emrSpo2 = document.getElementById('emrVitalsSPO2');
  const emrSugar = document.getElementById('emrVitalsSugar');
  const emrBmi = document.getElementById('emrVitalsBMI');

  if (emrBp) emrBp.textContent = v.bp;
  if (emrHr) emrHr.textContent = v.hr;
  if (emrSpo2) emrSpo2.textContent = v.spo2;
  if (emrSugar) emrSugar.textContent = v.sugar;
  if (emrBmi) emrBmi.textContent = v.bmi;

  // Update Doctor EMR Patient Info
  const emrName = document.getElementById('emrPatientName');
  const emrUhid = document.getElementById('emrPatientUHID');
  const emrAgeSex = document.getElementById('emrPatientAgeSex');

  if (emrName) emrName.textContent = p.name;
  if (emrUhid) emrUhid.textContent = p.uhid;
  if (emrAgeSex) emrAgeSex.textContent = `${p.age} · ${p.gender}`;

  // Update Care Advice in Patient Portal
  const adviceEl = document.getElementById('patientPortalCareAdvice');
  if (adviceEl) {
    adviceEl.textContent = `"${HEALTH_PORTAL_STATE.soapNotes.lifestyleAdvice}"`;
  }

  const syncedSoapAssessment = document.getElementById('patientSyncedSoapAssessment');
  if (syncedSoapAssessment) {
    syncedSoapAssessment.textContent = `"${HEALTH_PORTAL_STATE.soapNotes.assessment}"`;
  }

  const syncedSoapPlan = document.getElementById('patientSyncedSoapPlan');
  if (syncedSoapPlan) {
    syncedSoapPlan.textContent = `"${HEALTH_PORTAL_STATE.soapNotes.lifestyleAdvice}"`;
  }

  const soapTimestamp = document.getElementById('patientSoapTimestamp');
  if (soapTimestamp) {
    soapTimestamp.textContent = HEALTH_PORTAL_STATE.soapNotes.timestamp;
  }

  // Update Ordered Labs List in Patient Portal
  const orderedListEl = document.getElementById('patientPortalOrderedLabsList');
  if (orderedListEl) {
    orderedListEl.innerHTML = HEALTH_PORTAL_STATE.labOrders.map(test => `
      <span class="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#2B2927]/10 text-[#1F1E1D] flex items-center gap-1.5">
        <span class="text-emerald-700 font-bold">✓</span>
        <span>${test}</span>
      </span>
    `).join('');
  }

  // Update Active Doctor Active Patient Label in Chat
  const docChatName = document.getElementById('doctorChatActivePatientName');
  if (docChatName) docChatName.textContent = p.name;

  // Update Sync Timestamp
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const syncTimestampEl = document.getElementById('patientSyncTimestamp');
  if (syncTimestampEl) {
    syncTimestampEl.textContent = `Synced today at ${timeStr}`;
  }

  saveStateToStorage();
}

// Encounter timer (doctor consultation clock)
function startEncounterTimer() {
  if (encounterTimerInterval) clearInterval(encounterTimerInterval);
  const timerEl = document.getElementById('doctorEncounterTimer');

  encounterTimerInterval = setInterval(() => {
    HEALTH_PORTAL_STATE.encounterTimerSeconds++;
    const mins = Math.floor(HEALTH_PORTAL_STATE.encounterTimerSeconds / 60).toString().padStart(2, '0');
    const secs = (HEALTH_PORTAL_STATE.encounterTimerSeconds % 60).toString().padStart(2, '0');
    if (timerEl) timerEl.textContent = `${mins}:${secs}`;
  }, 1000);
}

// ================= RENDER CHECKUPS =================
function renderCheckupCards() {
  const container = document.getElementById('checkupsGrid');
  if (!container) return;

  const filtered = CHECKUP_PACKAGES.filter(pkg => {
    const matchesCat = currentCategory === 'all' || pkg.category === currentCategory;
    const matchesSearch = !currentSearch || 
      pkg.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      pkg.tagline.toLowerCase().includes(currentSearch.toLowerCase()) ||
      pkg.tests.some(t => t.toLowerCase().includes(currentSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-[#786E64] font-mono text-sm">
        No checkup packages matching "${currentSearch}". Try searching for 'cardiac', 'mri', or 'wellness'.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pkg => `
    <div class="group bg-white rounded-2xl p-6 sm:p-7 border border-[#2B2927]/10 hover:border-[#1F1E1D] transition-all duration-300 flex flex-col justify-between hover:shadow-lg">
      <div class="space-y-4">
        <div class="flex items-center justify-between text-xs font-mono text-[#786E64]">
          <span class="tracking-widest uppercase">${pkg.code}</span>
          <span class="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#4F473E] text-[11px] uppercase">${pkg.category}</span>
        </div>
        <div>
          <h3 class="font-serif text-2xl text-[#1F1E1D] group-hover:text-black transition-colors">${pkg.title}</h3>
          <p class="text-xs text-[#5C554E] leading-relaxed mt-2 line-clamp-2">${pkg.tagline}</p>
        </div>
        <div class="space-y-2 pt-2 border-t border-[#2B2927]/06">
          <div class="text-[11px] font-mono text-[#786E64] uppercase tracking-wider">Includes:</div>
          <ul class="text-xs text-[#3D3730] space-y-1.5">
            ${pkg.tests.slice(0, 3).map(t => `<li class="flex items-start gap-2"><span class="text-emerald-700">✓</span><span class="line-clamp-1">${t}</span></li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-[#2B2927]/08 flex items-center justify-between">
        <div>
          <span class="text-[11px] font-mono text-[#786E64] block">All-inclusive Fee</span>
          <span class="font-mono text-lg font-bold text-[#1F1E1D]">${pkg.fee}</span>
        </div>
        <div class="flex items-center gap-2">
          <button data-checkup-id="${pkg.id}" class="open-checkup-btn px-3 py-1.5 rounded-lg border border-[#2B2927]/12 text-xs font-mono text-[#1F1E1D] hover:bg-[#FAF7F2] transition-colors">
            Details
          </button>
          <button data-book-package="${pkg.title}" class="px-3.5 py-1.5 rounded-lg bg-[#1F1E1D] text-white text-xs font-mono hover:bg-[#3D3A36] transition-colors">
            Book
          </button>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.open-checkup-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-checkup-id');
      const pkg = CHECKUP_PACKAGES.find(p => p.id === id);
      if (pkg) openCheckupModal(pkg);
    });
  });

  document.querySelectorAll('[data-book-package]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-book-package');
      openBookingModal(`Screening: ${title}`);
    });
  });
}

// ================= RENDER SPECIALISTS =================
function renderSpecialists() {
  const container = document.getElementById('specialistsGrid');
  if (!container) return;

  const filtered = SPECIALISTS.filter(doc => {
    if (currentSpecialistFilter === 'all') return true;
    return doc.department.toLowerCase().includes(currentSpecialistFilter.toLowerCase());
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-[#786E64] font-mono text-sm">
        No faculty consultants currently filtered. Showing all specialists.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(doc => `
    <div class="bg-white rounded-2xl p-6 sm:p-7 border border-[#2B2927]/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
      <div class="space-y-5">
        <div class="w-full h-44 rounded-xl overflow-hidden flex items-center justify-center" style="background-color: ${doc.avatarBg};">
          ${doc.avatarHtml}
        </div>
        <div>
          <span class="text-[11px] font-mono uppercase tracking-widest text-[#786E64]">${doc.department}</span>
          <h3 class="font-serif text-2xl text-[#1F1E1D] mt-1">${doc.name}</h3>
          <p class="text-xs font-mono text-[#575048] mt-1">${doc.title}</p>
        </div>
        <div class="space-y-1 text-xs text-[#575048]">
          <div class="font-mono text-[10px] text-[#786E64] uppercase tracking-wider">Clinical Fellowships:</div>
          <p class="italic leading-relaxed text-[11px]">${doc.fellowships.join(' · ')}</p>
        </div>
      </div>

      <div class="pt-5 mt-5 border-t border-[#2B2927]/08 flex items-center justify-between">
        <button data-doctor-id="${doc.id}" class="open-doctor-btn text-xs font-mono text-[#1F1E1D] hover:underline">
          Faculty Profile →
        </button>
        <button data-book-doctor="${doc.name}" class="px-3.5 py-1.5 rounded-full bg-[#1F1E1D] text-white text-xs font-mono hover:bg-[#3D3A36] transition-colors">
          Book Consult
        </button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.open-doctor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-doctor-id');
      const doc = SPECIALISTS.find(d => d.id === id);
      if (doc) openDoctorModal(doc);
    });
  });

  document.querySelectorAll('[data-book-doctor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-book-doctor');
      openBookingModal(`Consultation with ${name}`);
    });
  });
}

// ================= RENDER FACILITY SUITE (ALL 8 FACULTIES) =================
function renderFacility(index) {
  const f = FACILITIES_DATA[index];
  const container = document.getElementById('facilityContentArea');
  if (!f || !container) return;

  container.innerHTML = `
    <!-- Left: Facility Specs & Clinical Attributes -->
    <div class="lg:col-span-7 space-y-6">
      <div class="space-y-2">
        <span class="text-xs font-mono tracking-widest uppercase text-[#736A61] bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#2B2927]/10">${f.badge}</span>
        <h3 class="font-serif text-3xl sm:text-4xl text-[#1F1E1D] pt-2">${f.title}</h3>
        <p class="text-sm text-[#524B44] leading-relaxed font-light">${f.description}</p>
      </div>

      <!-- Engineering & Environmental Specifications -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/08">
          <span class="font-mono text-[10px] uppercase text-[#786E64] block">Acoustic Isolation</span>
          <span class="font-sans text-xs font-medium text-[#1F1E1D] mt-0.5 block">${f.acoustics}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/08">
          <span class="font-mono text-[10px] uppercase text-[#786E64] block">Air Handling & Filtration</span>
          <span class="font-sans text-xs font-medium text-[#1F1E1D] mt-0.5 block">${f.airQuality}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/08">
          <span class="font-mono text-[10px] uppercase text-[#786E64] block">Circadian Lighting</span>
          <span class="font-sans text-xs font-medium text-[#1F1E1D] mt-0.5 block">${f.lighting}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/08">
          <span class="font-mono text-[10px] uppercase text-[#786E64] block">Primary Medical Core</span>
          <span class="font-sans text-xs font-medium text-[#1F1E1D] mt-0.5 block">${f.equipment}</span>
        </div>
      </div>

      <!-- Features Bulleted List -->
      <div class="space-y-2 pt-1">
        <span class="font-mono text-xs uppercase tracking-wider text-[#1F1E1D] font-semibold">Architectural & Clinical Protocols:</span>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${f.features.map(item => `
            <li class="flex items-center gap-2 text-xs text-[#4F473E]">
              <span class="text-emerald-700 font-bold">●</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-2">
        <button data-open-booking="Tour or Consultation: ${f.title}" class="px-5 py-2.5 rounded-full bg-[#1F1E1D] text-white text-xs font-mono hover:bg-[#3D3A36] transition-colors">
          Inquire Concerning This Facility Suite →
        </button>
      </div>
    </div>

    <!-- Right: High-Fidelity Architectural SVG Graphic -->
    <div class="lg:col-span-5 bg-[#171614] rounded-2xl p-6 border border-[#2B2927]/20 flex flex-col justify-between shadow-inner text-[#FAF7F2] h-full min-h-[340px]">
      <div class="flex items-center justify-between pb-3 border-b border-[#302D28] text-xs font-mono text-[#8C8378]">
        <span>SUITE SCHEMATIC · CAD 04</span>
        <span class="text-emerald-400">● COMMISSIONED</span>
      </div>

      <div class="py-6 flex items-center justify-center">
        <svg viewBox="0 0 280 200" class="w-full max-w-xs h-48 text-[#D9A566]">
          <rect x="20" y="20" width="240" height="160" rx="12" fill="#201E1B" stroke="#423E38" stroke-width="1.5" />
          <line x1="20" y1="70" x2="260" y2="70" stroke="#33302A" stroke-width="1" stroke-dasharray="4" />
          <circle cx="140" cy="115" r="45" fill="none" stroke="#D9A566" stroke-width="2" />
          <circle cx="140" cy="115" r="28" fill="#171614" stroke="#423E38" stroke-width="1.5" />
          <circle cx="140" cy="115" r="6" fill="#38BDF8" />
          <!-- Caliper lines -->
          <line x1="80" y1="115" x2="200" y2="115" stroke="#38BDF8" stroke-width="0.75" />
          <line x1="140" y1="55" x2="140" y2="175" stroke="#38BDF8" stroke-width="0.75" />
          <rect x="35" y="32" width="50" height="25" rx="4" fill="#2D2A26" stroke="#423E38" stroke-width="1" />
          <rect x="195" y="32" width="50" height="25" rx="4" fill="#2D2A26" stroke="#423E38" stroke-width="1" />
          <text x="140" y="185" fill="#8C8378" font-size="8" font-family="monospace" text-anchor="middle">LUMIÈRE BIO-ARCHITECTURE STANDARDS</text>
        </svg>
      </div>

      <div class="pt-3 border-t border-[#302D28] flex items-center justify-between text-[11px] font-mono text-[#8C8378]">
        <span>LEVEL: ${f.badge.split('·')[0].trim()}</span>
        <span>NABH ACCREDITED</span>
      </div>
    </div>
  `;

  // Highlight active facility button
  document.querySelectorAll('[data-facility-tab]').forEach((btn, idx) => {
    if (idx === index) {
      btn.className = "facility-tab-btn px-4 py-2.5 rounded-xl bg-[#1F1E1D] text-[#FAF7F2] font-medium text-xs whitespace-nowrap shadow-sm";
    } else {
      btn.className = "facility-tab-btn px-4 py-2.5 rounded-xl bg-white/80 border border-[#2B2927]/10 text-[#61584F] hover:bg-white text-xs whitespace-nowrap";
    }
  });

  // Re-bind booking button
  container.querySelector('[data-open-booking]')?.addEventListener('click', (e) => {
    openBookingModal(e.target.getAttribute('data-open-booking'));
  });
}

// ================= RENDER DOCTOR OPD QUEUE =================
function renderDoctorQueue(filterQuery = '') {
  const tbody = document.getElementById('doctorQueueTableBody');
  if (!tbody) return;

  const query = filterQuery.toLowerCase().trim();
  const filtered = DOCTOR_QUEUE.filter(p => 
    !query || p.name.toLowerCase().includes(query) || p.uhid.toLowerCase().includes(query) || p.reason.toLowerCase().includes(query)
  );

  const headerCount = document.getElementById('doctorQueueHeaderCount');
  if (headerCount) headerCount.textContent = DOCTOR_QUEUE.length;

  const totalMetric = document.getElementById('doctorTotalTodayMetric');
  if (totalMetric) totalMetric.textContent = `${DOCTOR_QUEUE.length} Consultations`;

  const waitingMetric = document.getElementById('doctorWaitingLoungeMetric');
  if (waitingMetric) {
    const waitingCount = DOCTOR_QUEUE.filter(p => p.status === 'Waiting').length;
    waitingMetric.textContent = `${waitingCount} Patients`;
  }

  tbody.innerHTML = filtered.map(p => {
    let statusClass = "bg-amber-50 text-amber-800 border-amber-200";
    if (p.status === 'In Consultation') statusClass = "bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold";
    if (p.status === 'Completed') statusClass = "bg-[#FAF7F2] text-[#6B6258] border-[#2B2927]/10";
    if (p.status === 'Labs Pending') statusClass = "bg-sky-50 text-sky-800 border-sky-200";

    const isCurrentActive = HEALTH_PORTAL_STATE.activePatient.id === p.id;

    return `
      <tr class="hover:bg-[#FAF7F2] transition-colors cursor-pointer ${isCurrentActive ? 'bg-sky-50/50' : ''}" onclick="selectDoctorQueuePatient('${p.id}')">
        <td class="py-3.5 px-6 font-mono font-bold text-[#1F1E1D]">#${p.token}</td>
        <td class="py-3.5 px-6">
          <div class="font-medium text-[#1F1E1D] flex items-center gap-1.5">
            <span>${p.name}</span>
            ${isCurrentActive ? '<span class="px-1.5 py-0.5 rounded bg-sky-200 text-sky-800 text-[9px] font-mono">ACTIVE</span>' : ''}
          </div>
          <div class="font-mono text-[10px] text-[#786E64]">${p.uhid}</div>
        </td>
        <td class="py-3.5 px-6 font-mono text-[#524A42]">${p.age} / ${p.gender}</td>
        <td class="py-3.5 px-6 font-mono text-[#1F1E1D]">${p.time}</td>
        <td class="py-3.5 px-6 text-[#524A42] max-w-xs truncate">${p.reason}</td>
        <td class="py-3.5 px-6">
          <span class="px-2.5 py-1 rounded-full text-[10px] font-mono border ${statusClass}">${p.status}</span>
        </td>
        <td class="py-3.5 px-6 text-right space-x-1.5">
          ${p.status === 'Waiting' || p.status === 'Labs Pending' ? `
            <button onclick="event.stopPropagation(); callPatientIntoRoom('${p.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-800 text-white text-[11px] font-mono hover:bg-emerald-900 transition-colors">
              Call In →
            </button>
          ` : ''}
          ${p.status === 'In Consultation' ? `
            <button onclick="event.stopPropagation(); markPatientCompleted('${p.id}')" class="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#2B2927]/15 text-[11px] font-mono text-[#1F1E1D] hover:bg-[#1F1E1D] hover:text-white transition-colors">
              ✓ Done
            </button>
          ` : ''}
          <button onclick="event.stopPropagation(); selectDoctorQueuePatient('${p.id}')" class="px-3 py-1 rounded-lg bg-[#1F1E1D] text-white text-[11px] font-mono hover:bg-[#3D3A36] transition-colors">
            Chart →
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Switch active patient in Doctor EMR
window.selectDoctorQueuePatient = function(patientId) {
  const patient = DOCTOR_QUEUE.find(p => p.id === patientId);
  if (!patient) return;

  HEALTH_PORTAL_STATE.activePatient = {
    id: patient.id,
    token: patient.token,
    name: patient.name,
    uhid: patient.uhid,
    age: patient.age,
    gender: patient.gender,
    blood: patient.blood || 'O+ Positive',
    doctor: 'Dr. Suniti Rao, MD, DM',
    phone: '+91 98765 43210',
    corporate: patient.corp || 'Private Healthcare'
  };

  HEALTH_PORTAL_STATE.vitals.bp = patient.bp || '120/80';
  HEALTH_PORTAL_STATE.vitals.hr = patient.hr || '72 bpm';
  HEALTH_PORTAL_STATE.vitals.spo2 = patient.spo2 || '99%';
  HEALTH_PORTAL_STATE.vitals.sugar = patient.bs || '90 mg/dL';
  HEALTH_PORTAL_STATE.vitals.bmi = patient.bmi || '23.4 kg/m²';
  HEALTH_PORTAL_STATE.vitals.temp = patient.temp || '98.4 °F';

  syncAllPortals();
  renderDoctorQueue();
  switchDoctorTab('emr', true);
};

window.callPatientIntoRoom = function(patientId) {
  DOCTOR_QUEUE.forEach(p => {
    if (p.id === patientId) {
      p.status = 'In Consultation';
    } else if (p.status === 'In Consultation') {
      p.status = 'Waiting';
    }
  });

  HEALTH_PORTAL_STATE.encounterTimerSeconds = 0;
  startEncounterTimer();
  selectDoctorQueuePatient(patientId);
};

window.markPatientCompleted = function(patientId) {
  const patient = DOCTOR_QUEUE.find(p => p.id === patientId);
  if (patient) {
    patient.status = 'Completed';
    renderDoctorQueue();
    alert(`Consultation with ${patient.name} marked completed. Medical dossier committed.`);
  }
};

// ================= RENDER PRESCRIPTIONS =================
function renderPatientPrescriptions() {
  const container = document.getElementById('patientPrescriptionsContainer');
  const tbody = document.getElementById('prescriptionTableBody');

  // In Patient Portal
  if (container) {
    container.innerHTML = HEALTH_PORTAL_STATE.prescriptions.map((rx, idx) => `
      <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/06 space-y-1">
        <div class="flex items-center justify-between font-semibold text-sm text-[#1F1E1D]">
          <span>${rx.name}</span>
          <span class="font-mono text-xs bg-white px-2 py-0.5 rounded border border-[#2B2927]/08">${rx.dose}</span>
        </div>
        <div class="text-[#6B6258] text-xs">${rx.indication || 'Maintenance Therapy'} · ${rx.prescriber || 'Dr. Suniti Rao, MD, DM'}</div>
        <div class="font-mono text-[10px] text-emerald-700 flex items-center justify-between pt-1">
          <span>✓ ${rx.status || 'Digitally Signed by Dr. Suniti Rao'}</span>
          <span class="text-[#8C8378]">Supply: ${rx.duration || '90 Days'}</span>
        </div>
      </div>
    `).join('');
  }

  // In Doctor Console
  if (tbody) {
    tbody.innerHTML = HEALTH_PORTAL_STATE.prescriptions.map((rx, idx) => `
      <tr>
        <td class="py-3 px-4 font-semibold text-[#1F1E1D]">${rx.name}</td>
        <td class="py-3 px-4 text-[#524A42]">${rx.dose}</td>
        <td class="py-3 px-4 font-mono">${rx.duration || '90 Days'}</td>
        <td class="py-3 px-4 text-right">
          <button onclick="removePrescriptionItem(${idx})" class="text-rose-600 hover:underline">Remove</button>
        </td>
      </tr>
    `).join('');
  }
}

window.removePrescriptionItem = function(index) {
  HEALTH_PORTAL_STATE.prescriptions.splice(index, 1);
  renderPatientPrescriptions();
  saveStateToStorage();
};

// ================= RENDER LAB RESULTS =================
function renderLabResults(activeCategory = 'all') {
  const tbody = document.getElementById('labResultsTableBody');
  if (!tbody) return;

  const filtered = LAB_BIOMARKERS.filter(b => {
    if (activeCategory === 'all') return true;
    return b.category === activeCategory;
  });

  tbody.innerHTML = filtered.map(b => `
    <tr class="hover:bg-[#FAF7F2] transition-colors">
      <td class="py-3.5 px-6 font-medium text-[#1F1E1D]">${b.name}</td>
      <td class="py-3.5 px-6 font-mono font-semibold text-[#1F1E1D]">${b.result}</td>
      <td class="py-3.5 px-6 font-mono text-[#786E64]">${b.range}</td>
      <td class="py-3.5 px-6">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium ${
          b.status === 'Optimal' 
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
            : 'bg-amber-50 text-amber-800 border border-amber-200'
        }">${b.status}</span>
      </td>
      <td class="py-3.5 px-6 text-right font-mono text-[#575048]">${b.trend}</td>
    </tr>
  `).join('');
}

// ================= BIDIRECTIONAL TELE-CONSULT CHAT =================
function renderChatMessages() {
  const patientContainer = document.getElementById('patientChatMessages');
  const doctorContainer = document.getElementById('doctorChatMessages');

  const html = HEALTH_PORTAL_STATE.chatMessages.map(msg => {
    if (msg.sender === 'patient') {
      return `
        <div class="flex items-start gap-2.5 max-w-lg">
          <div class="w-7 h-7 rounded-full bg-[#1F1E1D] text-white flex items-center justify-center font-mono text-xs shrink-0 font-bold">VS</div>
          <div class="space-y-1">
            <div class="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#2B2927]/08 text-[#1F1E1D] leading-relaxed">
              ${msg.text}
            </div>
            <div class="text-[10px] font-mono text-[#8C8378] pl-1">Vikram Sharma · ${msg.time}</div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="flex items-start justify-end gap-2.5 ml-auto max-w-lg">
          <div class="space-y-1 text-right">
            <div class="p-3.5 rounded-2xl bg-[#1C1B19] text-white text-left leading-relaxed">
              ${msg.text}
            </div>
            <div class="text-[10px] font-mono text-[#8C8378] pr-1">Dr. Suniti Rao, MD, DM · ${msg.time}</div>
          </div>
          <div class="w-7 h-7 rounded-full bg-sky-700 text-white flex items-center justify-center font-mono text-xs shrink-0 font-bold">SR</div>
        </div>
      `;
    }
  }).join('');

  if (patientContainer) {
    patientContainer.innerHTML = html;
    patientContainer.scrollTop = patientContainer.scrollHeight;
  }

  if (doctorContainer) {
    doctorContainer.innerHTML = html;
    doctorContainer.scrollTop = doctorContainer.scrollHeight;
  }
}

function sendChatMessage(sender, text) {
  if (!text || !text.trim()) return;
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  HEALTH_PORTAL_STATE.chatMessages.push({
    sender: sender,
    text: text.trim(),
    time: time
  });

  renderChatMessages();
  saveStateToStorage();
}

// ================= QUICK PRESCRIBING & SOAP TEMPLATES =================
function setupQuickPrescribing() {
  document.querySelectorAll('[data-add-rx-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetStr = btn.getAttribute('data-add-rx-preset');
      if (!presetStr) return;
      const [name, dose, duration] = presetStr.split('|');

      // Check if already in list
      const exists = HEALTH_PORTAL_STATE.prescriptions.some(rx => rx.name.toLowerCase().includes(name.toLowerCase()));
      if (!exists) {
        HEALTH_PORTAL_STATE.prescriptions.push({
          name: name.trim(),
          dose: dose ? dose.trim() : '1 Tab OD',
          duration: duration ? duration.trim() : '90 Days',
          indication: 'Cardiovascular Optimization',
          prescriber: 'Dr. Suniti Rao, MD, DM',
          status: 'Digitally Signed & Synced to Campus Pharmacy'
        });
        renderPatientPrescriptions();
        saveStateToStorage();
        alert(`✓ Added ${name} to digital prescription and synchronized with patient portal.`);
      } else {
        alert(`${name} is already in the active prescription slate.`);
      }
    });
  });
}

function setupSoapTemplates() {
  const select = document.getElementById('soapTemplateSelect');
  if (!select) return;

  const templates = {
    'cardiac-audit': {
      subjective: "42-year-old software executive presenting for scheduled cardiovascular audit. Patient reports feeling energetic with zero dyspnea on exertion, no angina, orthopnea, or nocturnal palpitations. Complies with 35-min morning brisk walk 5 days weekly. Denies smoking or family premature CAD.",
      objective: "General: Well-nourished, comfortable, no distress. JVP normal. Bilateral carotid upstrokes brisk without bruits. Cardiovascular: S1, S2 clear, normal split, no S3/S4, no ejection click or regurgitant murmur. Respiratory: Vesicular breath sounds throughout, no crackles or wheezes. Extremities: Zero pedal edema.",
      assessment: "1. Low 10-year cardiovascular ASCVD risk (< 2.4%). 2. Agatston Coronary Calcium Score = 0 (Siemens 640-CT Somatom Force). 3. Glycated hemoglobin HbA1c 5.2% and ApoB 64 mg/dL within optimal targets.",
      plan: "Maintain Mediterranean diet and current aerobic regimen. Continue CoQ10 100mg and Omega-3 1000mg. Repeat routine lipid profile & hs-CRP in 12 months. Routine annual executive checkup scheduled for October 2027.",
      advice: "Maintain Mediterranean diet pattern; brisk aerobic walking 35 mins/day, 5 days weekly. Keep blood pressure monitored quarterly. Annual executive cardiovascular screening re-check scheduled for October 2027."
    },
    'post-pci': {
      subjective: "Follow-up post drug-eluting stent (DES) implantation in mid-LAD 6 months ago. Denies recurrent angina, chest heaviness, or orthopnea. Tolerates brisk 30-min walking. No easy bruising or bleeding on dual antiplatelet therapy.",
      objective: "Vitals stable. BP 122/78 mmHg, HR 64 bpm sinus. Cardiovascular: Normal heart sounds, no gallop or murmurs. Puncture site: Right radial access healed cleanly, no pseudoaneurysm. Distal pulses symmetrical.",
      assessment: "1. Post-PCI (DES mid-LAD) in functional Class I status. 2. Preserved left ventricular ejection fraction (LVEF 64%). 3. Adequate platelet inhibition and LDL-C suppression.",
      plan: "Continue Aspirin 75mg + Ticagrelor 90mg BD for full 12-month course. Rosuvastatin 20mg at bedtime. Follow-up stress echocardiogram in 6 months.",
      advice: "Strict adherence to dual antiplatelet medications. Do not skip doses. Continue moderate aerobic exercise with gradual intensity increments."
    },
    'hypertension': {
      subjective: "Mild primary essential hypertension diagnosed 2 years prior. Complies with home BP monitoring. Averages 124/80 mmHg in mornings. No headaches, visual blurriness, or peripheral edema.",
      objective: "BP in clinic 118/76 mmHg. Heart rate 68 bpm. Fundoscopic examination: Grade I benign arteriolar changes, no papilledema. Urinalysis negative for microalbuminuria.",
      assessment: "Well-controlled Stage 1 Essential Hypertension on low-dose ARB therapy without end-organ damage.",
      plan: "Continue Telmisartan 40mg OD morning. Maintain dietary sodium under 2,000 mg/day. Review renal parameters and serum electrolytes annually.",
      advice: "Restrict dietary salt (under 1 teaspoon daily). Increase potassium-rich vegetables. Continue daily 30-minute morning walks."
    },
    'metabolic': {
      subjective: "Presents for metabolic evaluation and insulin sensitivity review. Mild post-prandial fatigue. No polyuria, polydipsia, or neuropathic symptoms.",
      objective: "BMI 24.2 kg/m², waist circumference 84 cm. Fasting blood glucose 88 mg/dL, Fasting Insulin 6.2 uIU/mL. HOMA-IR 1.3 (insulin sensitive).",
      assessment: "Optimal glycemic status without insulin resistance. Cardioprotective lipid particle distribution.",
      plan: "Time-restricted eating window (14:10). Emphasize protein and soluble fiber. Fasting metabolic panel repeat in 12 months.",
      advice: "Incorporate resistance training twice weekly. Limit refined carbohydrates and sweetened beverages. Maintain current body composition."
    }
  };

  select.addEventListener('change', () => {
    const val = select.value;
    if (val && templates[val]) {
      const t = templates[val];
      const subj = document.getElementById('soapSubjective');
      const obj = document.getElementById('soapObjective');
      const assess = document.getElementById('soapAssessment');
      const plan = document.getElementById('soapPlan');
      const advice = document.getElementById('soapLifestyleAdvice');

      if (subj) subj.value = t.subjective;
      if (obj) obj.value = t.objective;
      if (assess) assess.value = t.assessment;
      if (plan) plan.value = t.plan;
      if (advice) advice.value = t.advice;

      HEALTH_PORTAL_STATE.soapNotes.subjective = t.subjective;
      HEALTH_PORTAL_STATE.soapNotes.objective = t.objective;
      HEALTH_PORTAL_STATE.soapNotes.assessment = t.assessment;
      HEALTH_PORTAL_STATE.soapNotes.plan = t.plan;
      HEALTH_PORTAL_STATE.soapNotes.lifestyleAdvice = t.advice;

      alert(`✓ Clinical template "${select.options[select.selectedIndex].text}" loaded into EMR.`);
    }
  });
}

// ================= HASHROUTER =================
function initHashRouter() {
  window.addEventListener('hashchange', handleHashRoute);
  handleHashRoute();
}

function handleHashRoute() {
  const hash = window.location.hash || '#/';
  const pathname = window.location.pathname;
  const landing = document.getElementById('landingView');
  const portal = document.getElementById('portalView');
  const doctorPortal = document.getElementById('doctorPortalView');

  // If on doctor-portal.html or URL hash is doctor-portal
  if (pathname.includes('doctor-portal') || hash.startsWith('#/doctor-portal') || hash.startsWith('#doctor-portal')) {
    landing?.classList.add('hidden');
    portal?.classList.add('hidden');
    doctorPortal?.classList.remove('hidden');

    const parts = hash.replace('#/doctor-portal', '').replace('#doctor-portal', '').split('/');
    const subTab = (parts[1] || 'queue').toLowerCase();
    switchDoctorTab(subTab, false);
    return;
  }

  // If on patient-portal.html or URL hash is patient-portal
  if (pathname.includes('patient-portal') || hash.startsWith('#/patient-portal') || hash.startsWith('#patient-portal')) {
    landing?.classList.add('hidden');
    doctorPortal?.classList.add('hidden');
    portal?.classList.remove('hidden');

    const parts = hash.replace('#/patient-portal', '').replace('#patient-portal', '').split('/');
    const subTab = (parts[1] || 'overview').toLowerCase();
    switchPortalTab(subTab, false);
    return;
  }

  // Standalone pages (philosophy.html, checkups.html, etc.) or root index.html
  if (landing) {
    portal?.classList.add('hidden');
    doctorPortal?.classList.add('hidden');
    landing?.classList.remove('hidden');

    if (hash && hash !== '#/' && hash !== '#') {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }
}

// Switch Patient Portal Tab
function switchPortalTab(tabName, updateHash = true) {
  document.querySelectorAll('[data-portal-tab]').forEach(btn => {
    const t = btn.getAttribute('data-portal-tab');
    if (t === tabName) {
      btn.className = "portal-tab-btn px-4 py-3 border-b-2 border-[#D9A566] text-[#D9A566] font-medium whitespace-nowrap";
    } else {
      btn.className = "portal-tab-btn px-4 py-3 border-b-2 border-transparent text-[#A8A096] hover:text-white whitespace-nowrap";
    }
  });

  document.querySelectorAll('.portal-tab-pane').forEach(pane => {
    pane.classList.add('hidden');
  });

  const activePane = document.getElementById(`portal-tab-${tabName}`);
  if (activePane) {
    activePane.classList.remove('hidden');
  }

  if (updateHash) {
    if (window.location.pathname.includes('patient-portal')) {
      window.location.hash = `#${tabName}`;
    } else {
      window.location.hash = `#/patient-portal/${tabName}`;
    }
  }
}

// Switch Doctor Portal Tab
function switchDoctorTab(tabName, updateHash = true) {
  document.querySelectorAll('[data-doctor-tab]').forEach(btn => {
    const t = btn.getAttribute('data-doctor-tab');
    if (t === tabName) {
      btn.className = "doctor-tab-btn px-4 py-3 border-b-2 border-sky-400 text-sky-400 font-medium whitespace-nowrap";
    } else {
      btn.className = "doctor-tab-btn px-4 py-3 border-b-2 border-transparent text-[#A8A096] hover:text-white whitespace-nowrap";
    }
  });

  document.querySelectorAll('.doctor-tab-pane').forEach(pane => {
    pane.classList.add('hidden');
  });

  const activePane = document.getElementById(`doctor-tab-${tabName}`);
  if (activePane) {
    activePane.classList.remove('hidden');
  }

  if (updateHash) {
    if (window.location.pathname.includes('doctor-portal')) {
      window.location.hash = `#${tabName}`;
    } else {
      window.location.hash = `#/doctor-portal/${tabName}`;
    }
  }
}

// ================= EVENT LISTENERS SETUP =================
function setupEventListeners() {
  // Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileMenuDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    });
  }

  // Booking Modal Openers
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-open-booking') || 'Outpatient Consultation';
      openBookingModal(preset);
    });
  });

  // Booking Modal Close
  document.querySelectorAll('[data-close-booking-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('bookingModal')?.classList.add('hidden');
    });
  });

  // Modal Booking Form Submit
  const modalForm = document.getElementById('modalBookingForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ticket = 'LMR-' + Math.floor(100000 + Math.random() * 900000);
      const ticketEl = document.getElementById('modalTicketNumber');
      if (ticketEl) ticketEl.textContent = ticket;

      modalForm.classList.add('hidden');
      document.getElementById('modalBookingSuccess')?.classList.remove('hidden');
    });
  }

  // Inline Booking Form Submit
  const inlineForm = document.getElementById('inlineBookingForm');
  if (inlineForm) {
    inlineForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ticket = 'LMR-' + Math.floor(100000 + Math.random() * 900000);
      const ticketEl = document.getElementById('inlineTicketNumber');
      if (ticketEl) ticketEl.textContent = ticket;

      inlineForm.classList.add('hidden');
      document.getElementById('inlineBookingSuccess')?.classList.remove('hidden');
    });
  }

  const inlineResetBtn = document.getElementById('inlineResetBookingBtn');
  if (inlineResetBtn) {
    inlineResetBtn.addEventListener('click', () => {
      inlineForm.reset();
      inlineForm.classList.remove('hidden');
      document.getElementById('inlineBookingSuccess')?.classList.add('hidden');
    });
  }

  // Checkup Category Buttons
  document.querySelectorAll('[data-checkup-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-checkup-cat') || 'all';
      updateCategoryButtonsUI();
      renderCheckupCards();
    });
  });

  // Checkup Search Input
  const searchInput = document.getElementById('checkupSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderCheckupCards();
    });
  }

  // Facility Tabs (All 8 medical faculties)
  document.querySelectorAll('[data-facility-tab]').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      renderFacility(idx);
    });
  });

  // Specialist Filter Tabs
  document.querySelectorAll('[data-specialist-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSpecialistFilter = btn.getAttribute('data-specialist-filter') || 'all';
      document.querySelectorAll('[data-specialist-filter]').forEach(b => {
        if (b === btn) {
          b.className = "px-3.5 py-1.5 rounded-lg bg-[#1F1E1D] text-[#FAF7F2] font-medium shadow-sm whitespace-nowrap";
        } else {
          b.className = "px-3.5 py-1.5 rounded-lg bg-white/80 text-[#61584F] hover:bg-white hover:text-[#1F1E1D] border border-[#2B2927]/06 whitespace-nowrap";
        }
      });
      renderSpecialists();
    });
  });

  // Accordion for Centres of Excellence
  document.querySelectorAll('[data-accordion-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-accordion-btn');
      const content = document.getElementById(`centre-content-${targetId}`);
      const icon = btn.querySelector('.accordion-chevron');
      const isCurrentlyOpen = content && !content.classList.contains('hidden');

      document.querySelectorAll('.centre-accordion-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.accordion-chevron').forEach(i => i.classList.remove('rotate-180'));

      if (!isCurrentlyOpen && content) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // Footer Policy Modal
  document.querySelectorAll('[data-open-policy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const policyType = btn.getAttribute('data-open-policy');
      const modal = document.getElementById('policyModal');
      const title = document.getElementById('policyModalTitle');
      if (title) title.textContent = (policyType.charAt(0).toUpperCase() + policyType.slice(1)) + ' Policy';
      modal?.classList.remove('hidden');
    });
  });

  document.getElementById('closePolicyModalBtn')?.addEventListener('click', () => {
    document.getElementById('policyModal')?.classList.add('hidden');
  });
}

function updateCategoryButtonsUI() {
  document.querySelectorAll('[data-checkup-cat]').forEach(btn => {
    const cat = btn.getAttribute('data-checkup-cat');
    if (cat === currentCategory) {
      btn.className = "px-3.5 py-1.5 rounded-lg bg-[#1F1E1D] text-[#FAF7F2] font-medium shadow-sm whitespace-nowrap";
    } else {
      btn.className = "px-3.5 py-1.5 rounded-lg text-[#61584F] hover:text-[#1F1E1D] whitespace-nowrap";
    }
  });
}

// Setup Patient Portal Event Listeners
function setupPortalEventListeners() {
  document.querySelectorAll('[data-portal-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-portal-tab');
      if (tabName) switchPortalTab(tabName);
    });
  });

  document.querySelectorAll('[data-switch-to-portal-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-switch-to-portal-tab');
      if (tabName) switchPortalTab(tabName);
    });
  });

  document.querySelectorAll('[data-lab-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-lab-filter') || 'all';
      document.querySelectorAll('[data-lab-filter]').forEach(b => {
        if (b === btn) {
          b.className = "lab-filter-btn px-3.5 py-1.5 rounded-lg bg-[#1F1E1D] text-white font-medium";
        } else {
          b.className = "lab-filter-btn px-3.5 py-1.5 rounded-lg bg-white border border-[#2B2927]/10 text-[#61584F]";
        }
      });
      renderLabResults(cat);
    });
  });

  // Patient Chat Form Submit
  const patientChatForm = document.getElementById('patientChatForm');
  const patientChatInput = document.getElementById('patientChatInput');
  if (patientChatForm && patientChatInput) {
    patientChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = patientChatInput.value;
      if (val) {
        sendChatMessage('patient', val);
        patientChatInput.value = '';
      }
    });
  }
}

// Setup Doctor Portal Event Listeners
function setupDoctorPortalEventListeners() {
  // Tab buttons
  document.querySelectorAll('[data-doctor-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-doctor-tab');
      if (tabName) switchDoctorTab(tabName);
    });
  });

  // Switch subtab links
  document.querySelectorAll('[data-switch-doctor-subtab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-switch-doctor-subtab');
      if (tabName) switchDoctorTab(tabName);
    });
  });

  // Queue Search Filter
  const queueSearch = document.getElementById('doctorQueueSearchInput');
  if (queueSearch) {
    queueSearch.addEventListener('input', (e) => {
      renderDoctorQueue(e.target.value);
    });
  }

  // SOAP Save Note Button (Syncs to Patient Portal)
  const saveSoapBtn = document.getElementById('saveSoapBtn');
  const soapToast = document.getElementById('soapSaveToast');
  if (saveSoapBtn) {
    saveSoapBtn.addEventListener('click', () => {
      const subj = document.getElementById('soapSubjective')?.value || '';
      const obj = document.getElementById('soapObjective')?.value || '';
      const assess = document.getElementById('soapAssessment')?.value || '';
      const plan = document.getElementById('soapPlan')?.value || '';
      const advice = document.getElementById('soapLifestyleAdvice')?.value || '';

      const now = new Date();
      const timestamp = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) + ', ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      HEALTH_PORTAL_STATE.soapNotes = {
        subjective: subj,
        objective: obj,
        assessment: assess,
        plan: plan,
        lifestyleAdvice: advice,
        timestamp: timestamp,
        signedBy: 'Dr. Suniti Rao, MD, DM'
      };

      syncAllPortals();

      if (soapToast) {
        soapToast.classList.remove('hidden');
        setTimeout(() => soapToast.classList.add('hidden'), 3500);
      }
    });
  }

  // Vitals Modal Open & Submit
  const openVitalsBtn = document.getElementById('openVitalsModalBtn');
  const vitalsModal = document.getElementById('vitalsModal');
  const closeVitalsBtn = document.getElementById('closeVitalsModalBtn');
  const cancelVitalsBtn = document.getElementById('cancelVitalsModalBtn');
  const vitalsForm = document.getElementById('vitalsEditForm');

  if (openVitalsBtn && vitalsModal) {
    openVitalsBtn.addEventListener('click', () => {
      const v = HEALTH_PORTAL_STATE.vitals;
      const bpIn = document.getElementById('inputVitalsBP');
      const hrIn = document.getElementById('inputVitalsHR');
      const spo2In = document.getElementById('inputVitalsSPO2');
      const sugarIn = document.getElementById('inputVitalsSugar');
      const bmiIn = document.getElementById('inputVitalsBMI');
      const tempIn = document.getElementById('inputVitalsTemp');

      if (bpIn) bpIn.value = v.bp;
      if (hrIn) hrIn.value = v.hr;
      if (spo2In) spo2In.value = v.spo2;
      if (sugarIn) sugarIn.value = v.sugar;
      if (bmiIn) bmiIn.value = v.bmi;
      if (tempIn) tempIn.value = v.temp;
      vitalsModal.classList.remove('hidden');
    });
  }

  closeVitalsBtn?.addEventListener('click', () => vitalsModal?.classList.add('hidden'));
  cancelVitalsBtn?.addEventListener('click', () => vitalsModal?.classList.add('hidden'));

  if (vitalsForm) {
    vitalsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const bpIn = document.getElementById('inputVitalsBP');
      const hrIn = document.getElementById('inputVitalsHR');
      const spo2In = document.getElementById('inputVitalsSPO2');
      const sugarIn = document.getElementById('inputVitalsSugar');
      const bmiIn = document.getElementById('inputVitalsBMI');
      const tempIn = document.getElementById('inputVitalsTemp');

      HEALTH_PORTAL_STATE.vitals = {
        bp: bpIn ? bpIn.value.trim() : '120/80',
        hr: hrIn ? hrIn.value.trim() : '72 bpm',
        spo2: spo2In ? spo2In.value.trim() : '98%',
        sugar: sugarIn ? sugarIn.value.trim() : '90 mg/dL',
        bmi: bmiIn ? bmiIn.value.trim() : '23.4',
        temp: tempIn ? tempIn.value.trim() : '98.6 °F'
      };

      // Also update in queue for active patient
      const curr = DOCTOR_QUEUE.find(p => p.id === HEALTH_PORTAL_STATE.activePatient.id);
      if (curr) {
        curr.bp = HEALTH_PORTAL_STATE.vitals.bp;
        curr.hr = HEALTH_PORTAL_STATE.vitals.hr;
        curr.spo2 = HEALTH_PORTAL_STATE.vitals.spo2;
        curr.bs = HEALTH_PORTAL_STATE.vitals.sugar;
        curr.bmi = HEALTH_PORTAL_STATE.vitals.bmi;
      }

      syncAllPortals();
      renderDoctorQueue();
      vitalsModal?.classList.add('hidden');
      alert('✓ Fresh vitals recorded in EMR and synchronized with Patient Portal.');
    });
  }

  // Walk-in Modal Open & Submit
  const openWalkInBtn = document.getElementById('openAddWalkInModalBtn');
  const walkInModal = document.getElementById('walkInModal');
  const closeWalkInBtn = document.getElementById('closeWalkInModalBtn');
  const cancelWalkInBtn = document.getElementById('cancelWalkInModalBtn');
  const walkInForm = document.getElementById('walkInPatientForm');

  openWalkInBtn?.addEventListener('click', () => walkInModal?.classList.remove('hidden'));
  closeWalkInBtn?.addEventListener('click', () => walkInModal?.classList.add('hidden'));
  cancelWalkInBtn?.addEventListener('click', () => walkInModal?.classList.add('hidden'));

  if (walkInForm) {
    walkInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameIn = document.getElementById('walkInName');
      const ageGenderIn = document.getElementById('walkInAgeGender');
      const reasonIn = document.getElementById('walkInReason');
      const bpIn = document.getElementById('walkInBP');
      const hrIn = document.getElementById('walkInHR');
      const priorityIn = document.getElementById('walkInPriority');

      const name = nameIn ? nameIn.value.trim() : 'Walk-in Patient';
      const ageGender = ageGenderIn ? ageGenderIn.value.trim() : '45 Yrs / Adult';
      const reason = reasonIn ? reasonIn.value.trim() : 'General consultation';
      const bp = bpIn ? bpIn.value.trim() : '120/80';
      const hr = hrIn ? hrIn.value.trim() : '72 bpm';
      const priority = priorityIn ? priorityIn.value : 'Routine';

      const tokenNum = (DOCTOR_QUEUE.length + 1).toString().padStart(2, '0');
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const newPatient = {
        id: 'p' + (Date.now()),
        token: tokenNum,
        name: name,
        uhid: 'LUM-BLR-2026-' + Math.floor(1000 + Math.random() * 9000),
        age: ageGender.split('/')[0]?.trim() || '45 Yrs',
        gender: ageGender.split('/')[1]?.trim() || 'Male',
        reason: `${reason} (${priority})`,
        time: timeStr,
        status: priority === 'Urgent' ? 'Waiting' : 'Waiting',
        bp: bp || '120/80',
        hr: hr || '72 bpm',
        spo2: '99%',
        bs: '90 mg/dL',
        bmi: '23.0 kg/m²',
        temp: '98.4 °F',
        blood: 'B+ve',
        corp: 'Walk-In Triage'
      };

      DOCTOR_QUEUE.push(newPatient);
      renderDoctorQueue();
      walkInModal?.classList.add('hidden');
      walkInForm.reset();
      alert(`✓ Patient #${newPatient.token} (${newPatient.name}) inserted into today's OPD Queue.`);
    });
  }

  // Complete Consult Button
  const completeBtn = document.getElementById('markConsultCompletedBtn');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const activeId = HEALTH_PORTAL_STATE.activePatient.id;
      markPatientCompleted(activeId);
    });
  }

  // PACS Modality Toggles
  document.querySelectorAll('[data-pacs-modality]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modality = btn.getAttribute('data-pacs-modality');
      document.querySelectorAll('[data-pacs-modality]').forEach(b => {
        if (b === btn) {
          b.className = "pacs-toggle-btn px-3.5 py-1.5 rounded-lg bg-[#1F1E1D] text-white text-xs font-mono";
        } else {
          b.className = "pacs-toggle-btn px-3.5 py-1.5 rounded-lg bg-white border border-[#2B2927]/15 text-[#524A42] text-xs font-mono";
        }
      });

      document.querySelectorAll('.pacs-view-pane').forEach(p => p.classList.add('hidden'));
      const activePane = document.getElementById(`pacs-view-${modality}`);
      if (activePane) activePane.classList.remove('hidden');
    });
  });

  // Add Medication Form
  const addMedForm = document.getElementById('addMedicationForm');
  if (addMedForm) {
    addMedForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('newMedName')?.value.trim();
      const dose = document.getElementById('newMedDose')?.value.trim();
      const duration = document.getElementById('newMedDuration')?.value.trim();

      if (!name || !dose) return;

      HEALTH_PORTAL_STATE.prescriptions.push({
        name: name,
        dose: dose,
        duration: duration || '30 Days',
        indication: 'Cardiovascular Maintenance',
        prescriber: 'Dr. Suniti Rao, MD, DM',
        status: 'Digitally Signed & Synced to Campus Pharmacy'
      });

      renderPatientPrescriptions();
      saveStateToStorage();
      addMedForm.reset();
      alert(`✓ Prescribed ${name} and synchronized with Patient Portal.`);
    });
  }

  // Sign Prescription Button
  const signRxBtn = document.getElementById('signRxBtn');
  const rxSuccessMsg = document.getElementById('rxSignSuccessMsg');
  if (signRxBtn) {
    signRxBtn.addEventListener('click', () => {
      if (rxSuccessMsg) rxSuccessMsg.classList.remove('hidden');
      signRxBtn.textContent = "✓ Digitally Signed & Synchronized with Patient Portal";
      signRxBtn.disabled = true;
      signRxBtn.className = "px-6 py-2.5 rounded-full bg-gray-700 text-white text-xs font-mono cursor-default";

      HEALTH_PORTAL_STATE.prescriptions.forEach(p => {
        p.status = 'Digitally Signed & Dispatched (Barcoded)';
      });
      renderPatientPrescriptions();
      saveStateToStorage();
    });
  }

  // Submit Doctor Lab Orders Button
  const submitLabOrdersBtn = document.getElementById('submitDoctorLabOrdersBtn');
  const labOrdersToast = document.getElementById('doctorLabOrdersToast');
  if (submitLabOrdersBtn) {
    submitLabOrdersBtn.addEventListener('click', () => {
      const selected = [];
      document.querySelectorAll('#doctorLabOrdersChecklist input[type="checkbox"]:checked').forEach(cb => {
        selected.push(cb.value);
      });

      if (selected.length > 0) {
        HEALTH_PORTAL_STATE.labOrders = selected;
        syncAllPortals();
        if (labOrdersToast) {
          labOrdersToast.classList.remove('hidden');
          setTimeout(() => labOrdersToast.classList.add('hidden'), 3500);
        }
        alert(`✓ ${selected.length} investigation orders dispatched to Central Lab & synced to Patient Portal.`);
      }
    });
  }

  // Doctor Chat Form
  const doctorChatForm = document.getElementById('doctorChatForm');
  const doctorChatInput = document.getElementById('doctorChatInput');
  if (doctorChatForm && doctorChatInput) {
    doctorChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = doctorChatInput.value;
      if (val) {
        sendChatMessage('doctor', val);
        doctorChatInput.value = '';
      }
    });
  }

  // Doctor Quick Replies
  document.querySelectorAll('[data-doctor-quick-reply]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-doctor-quick-reply');
      if (text) {
        sendChatMessage('doctor', text);
      }
    });
  });
}

// Patient Profile Switcher (Vikram Sharma <-> Eleanor Vance)
function setupPatientProfileSwitcher() {
  const toggleBtn = document.getElementById('togglePatientProfileBtn');
  if (!toggleBtn) return;

  const profiles = [
    {
      id: 'p1',
      token: '01',
      name: 'Vikram Sharma',
      uhid: 'LUM-BLR-2026-8942',
      age: '42 Yrs',
      gender: 'Male',
      blood: 'O+ Positive',
      doctor: 'Dr. Suniti Rao, MD, DM',
      phone: '+91 98765 43210',
      corporate: 'Infosys Executive Health',
      vitals: { bp: '118/76', hr: '68 bpm', spo2: '99%', sugar: '86 mg/dL', bmi: '23.4 kg/m²', temp: '98.4 °F' }
    },
    {
      id: 'p7',
      token: '07',
      name: 'Eleanor Vance',
      uhid: 'LUM-BLR-2026-9482',
      age: '38 Yrs',
      gender: 'Female',
      blood: 'A+ Positive',
      doctor: 'Dr. Anika Rao, FRCP',
      phone: '+91 98450 12044',
      corporate: 'Global Mobility Health',
      vitals: { bp: '114/72', hr: '72 bpm', spo2: '100%', sugar: '84 mg/dL', bmi: '21.8 kg/m²', temp: '98.6 °F' }
    }
  ];

  let activeIdx = 0;

  toggleBtn.addEventListener('click', () => {
    activeIdx = (activeIdx + 1) % profiles.length;
    const p = profiles[activeIdx];

    HEALTH_PORTAL_STATE.activePatient = {
      id: p.id,
      token: p.token,
      name: p.name,
      uhid: p.uhid,
      age: p.age,
      gender: p.gender,
      blood: p.blood,
      doctor: p.doctor,
      phone: p.phone,
      corporate: p.corporate
    };

    HEALTH_PORTAL_STATE.vitals = Object.assign({}, p.vitals);

    syncAllPortals();
    renderDoctorQueue();
    alert(`Switched active patient record to ${p.name} (${p.uhid}). Both portals updated!`);
  });
}

// ================= MODALS & POPUPS =================
function openCheckupModal(pkg) {
  selectedPackage = pkg;
  const modal = document.getElementById('checkupModal');
  const body = document.getElementById('checkupModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="flex items-start justify-between border-b border-[#2B2927]/10 pb-4">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-[#786E64]">${pkg.code}</span>
        <h2 class="font-serif text-3xl text-[#1F1E1D] mt-1">${pkg.title}</h2>
        <span class="inline-block mt-2 font-mono text-sm font-semibold text-[#1F1E1D] bg-[#EFE9DF] px-2.5 py-1 rounded-md">${pkg.fee}</span>
      </div>
      <button data-close-checkup class="p-2 rounded-full hover:bg-[#EFE9DF] text-[#4A423A]">
        ✕
      </button>
    </div>

    <div class="space-y-4 text-xs text-[#4A423A] leading-relaxed pt-2">
      <p class="text-sm font-serif italic text-[#1F1E1D]">${pkg.tagline}</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/06 font-mono">
        <div><strong>Duration:</strong> ${pkg.duration}</div>
        <div><strong>Turnaround:</strong> ${pkg.turnaround}</div>
        <div class="sm:col-span-2"><strong>Preparation:</strong> ${pkg.preparation}</div>
      </div>

      <div>
        <h4 class="font-mono text-xs uppercase tracking-wider text-[#1F1E1D] mb-2 font-semibold">Included Diagnostic Sequences:</h4>
        <ul class="space-y-2">
          ${pkg.tests.map(t => `<li class="flex items-start gap-2.5"><span class="text-emerald-700 font-bold">✓</span><span>${t}</span></li>`).join('')}
        </ul>
      </div>

      <div class="p-4 rounded-xl bg-[#F4EFEB] border border-[#2B2927]/08">
        <strong class="font-mono text-xs block mb-1">Clinical Indication:</strong>
        <p>${pkg.suitableFor}</p>
      </div>

      <div class="pt-4 flex items-center justify-end gap-3 border-t border-[#2B2927]/10">
        <button data-close-checkup class="px-5 py-2.5 text-xs font-mono text-[#575048] hover:text-black">Close</button>
        <button data-book-from-modal="${pkg.title}" class="px-6 py-2.5 rounded-full bg-[#1F1E1D] text-white text-xs font-mono font-medium hover:bg-[#3D3A36]">Reserve This Screen</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  body.querySelectorAll('[data-close-checkup]').forEach(btn => {
    btn.addEventListener('click', () => modal.classList.add('hidden'));
  });

  body.querySelector('[data-book-from-modal]')?.addEventListener('click', (e) => {
    modal.classList.add('hidden');
    openBookingModal(e.target.getAttribute('data-book-from-modal'));
  });
}

function openDoctorModal(doc) {
  selectedDoctor = doc;
  const modal = document.getElementById('doctorModal');
  const body = document.getElementById('doctorModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="flex items-start justify-between border-b border-[#2B2927]/10 pb-4">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-[#786E64]">${doc.department}</span>
        <h2 class="font-serif text-3xl text-[#1F1E1D] mt-1">${doc.name}</h2>
        <p class="text-xs font-mono text-[#575048] mt-1">${doc.title} · ${doc.experience}</p>
      </div>
      <button data-close-doctor class="p-2 rounded-full hover:bg-[#EFE9DF] text-[#4A423A]">
        ✕
      </button>
    </div>

    <div class="space-y-4 text-xs text-[#4A423A] leading-relaxed pt-2">
      <div class="w-full h-44 rounded-xl overflow-hidden flex items-center justify-center" style="background-color: ${doc.avatarBg};">
        ${doc.avatarHtml}
      </div>

      <p class="text-sm leading-relaxed">${doc.bio}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF7F2] border border-[#2B2927]/06">
        <div>
          <span class="font-mono text-[11px] uppercase tracking-wider text-[#786E64] block mb-1">Academic Credentials</span>
          <ul class="space-y-1 font-mono text-[11px]">
            ${doc.credentials.map(c => `<li>• ${c}</li>`).join('')}
          </ul>
        </div>
        <div>
          <span class="font-mono text-[11px] uppercase tracking-wider text-[#786E64] block mb-1">Clinical Fellowships</span>
          <ul class="space-y-1 font-mono text-[11px]">
            ${doc.fellowships.map(f => `<li>• ${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-[#F4EFEB] border border-[#2B2927]/08 font-mono">
        <strong>Clinic & Theatre Slate:</strong>
        <p class="mt-1">${doc.availability}</p>
      </div>

      <div class="pt-4 flex items-center justify-end gap-3 border-t border-[#2B2927]/10">
        <button data-close-doctor class="px-5 py-2.5 text-xs font-mono text-[#575048] hover:text-black">Close</button>
        <button data-book-doctor-modal="${doc.name}" class="px-6 py-2.5 rounded-full bg-[#1F1E1D] text-white text-xs font-mono font-medium hover:bg-[#3D3A36]">Schedule Consult with ${doc.name}</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  body.querySelectorAll('[data-close-doctor]').forEach(btn => {
    btn.addEventListener('click', () => modal.classList.add('hidden'));
  });

  body.querySelector('[data-book-doctor-modal]')?.addEventListener('click', (e) => {
    modal.classList.add('hidden');
    openBookingModal(`Consultation with ${e.target.getAttribute('data-book-doctor-modal')}`);
  });
}

function openBookingModal(presetService = '') {
  const modal = document.getElementById('bookingModal');
  const serviceInput = document.getElementById('modalServiceInput');
  const successBox = document.getElementById('modalBookingSuccess');
  const form = document.getElementById('modalBookingForm');

  if (serviceInput && presetService) {
    serviceInput.value = presetService;
  }

  if (successBox) successBox.classList.add('hidden');
  if (form) form.classList.remove('hidden');
  modal?.classList.remove('hidden');
}
