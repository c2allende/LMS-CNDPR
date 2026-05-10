/**
 * catalog-data.js — Datos del catálogo público LMS-CNDPR
 * Script global (no módulo ES). Disponible como CATALOG_OFFERINGS
 * y funciones helper globales.
 */

// ─── Constantes de sesión ─────────────────────────────────────────────────────
const KEY_ENROLLMENTS = 'lms_enrollments';

function _getEnrollments() {
    try {
        const raw = sessionStorage.getItem(KEY_ENROLLMENTS);
        return raw ? JSON.parse(raw) : ['dm2-actualizacion-clinica'];
    } catch (_) {
        return ['dm2-actualizacion-clinica'];
    }
}

// ─── Catálogo de ofertas ──────────────────────────────────────────────────────
const CATALOG_OFFERINGS = [
    {
        id: 'dm2-actualizacion-clinica',
        type: 'curso',
        title: 'Manejo Nutricional de la Diabetes Tipo 2: Actualización Clínica',
        shortDescription: 'Fisiopatología, evaluación ADIME y terapia médica nutricional basada en guías ADA 2024. Con evaluación y certificado oficial.',
        longDescription: 'Este curso de 3 módulos provee al profesional de la nutrición y la dietética una actualización clínica rigurosa sobre la diabetes mellitus tipo 2, desde sus fundamentos fisiopatológicos hasta la aplicación del proceso de cuidado nutricional basado en evidencia. Incluye evaluación interactiva y certificado oficial CNDPR al completar.',
        learningOutcomes: [
            'Describir los mecanismos fisiopatológicos centrales de la DM2 según las guías ADA 2024.',
            'Aplicar el proceso ADIME completo al paciente con DM2, integrando datos antropométricos, bioquímicos y dietéticos.',
            'Formular diagnósticos nutricionales en formato PES usando la terminología AND/ICDA.',
            'Diseñar estrategias de intervención nutricional individualizadas basadas en la evidencia.',
            'Interpretar indicadores bioquímicos clave y adaptar metas de tratamiento.',
        ],
        instructor: 'Lcda. Sofía M. Berríos Colón, MS, RDN, LD, CDCES',
        instructorBio: 'Nutricionista-Dietista con especialidad en cuidado y educación de la diabetes. Práctica clínica privada y docencia universitaria en San Juan, Puerto Rico.',
        hours: 15.00,
        modules: [
            { title: 'Fisiopatología y Evaluación Nutricional en DM2', hours: 5.00 },
            { title: 'Terapia Médica Nutricional: Estrategias de Intervención', hours: 5.00 },
            { title: 'Casos Clínicos y Práctica Profesional', hours: 5.00 },
        ],
        premium: true,
        code: 'EC-2026-001',
        enrolled: true,
        progress: 20,
    },
    {
        id: 'nutricion-renal',
        type: 'curso',
        title: 'Terapia Nutricional en Enfermedad Renal Crónica: Del Diagnóstico al Trasplante',
        shortDescription: 'Manejo nutricional integral del paciente con ERC en todas sus etapas, incluyendo diálisis y trasplante renal.',
        longDescription: 'Curso de actualización en terapia nutricional para la enfermedad renal crónica. Cubre la evaluación nutricional especializada, el manejo de electrolitos, la prescripción proteica según la etapa de la ERC y las estrategias nutricionales en diálisis peritoneal, hemodiálisis y post-trasplante.',
        learningOutcomes: [
            'Clasificar la ERC por etapas y adaptar las metas nutricionales a cada estadio.',
            'Prescribir ingesta proteica, de fósforo, potasio y sodio según la TFGe del paciente.',
            'Diferenciar el abordaje nutricional en hemodiálisis, diálisis peritoneal y trasplante.',
            'Identificar la malnutrición proteico-energética como factor de riesgo en ERC.',
        ],
        instructor: 'Dr. Carlos A. Sánchez Ortiz, PhD, RD, LD',
        instructorBio: 'Nutricionista-Dietista con doctorado en ciencias de la nutrición. Investigador y docente en ciencias de salud renal en Puerto Rico.',
        hours: 8.00,
        modules: [
            { title: 'ERC Estadios 1–4: Evaluación y Manejo Conservador', hours: 4.00 },
            { title: 'Diálisis, Trasplante y Casos Clínicos Renales', hours: 4.00 },
        ],
        premium: true,
        code: 'EC-2026-002',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'conteo-carbohidratos',
        type: 'taller',
        title: 'Conteo de Carbohidratos Avanzado: Metodología para el Paciente con Diabetes',
        shortDescription: 'Taller práctico intensivo para dominar el conteo de CHO básico y avanzado, índice glucémico y planificación de comidas.',
        longDescription: 'Taller práctico dirigido al profesional clínico que trabaja con pacientes con diabetes. Incluye métodos de conteo de carbohidratos por intercambio y por gramos, cálculo de dosis de insulina basado en CHO, interpretación del índice glucémico y aplicación con alimentos típicos de la gastronomía puertorriqueña.',
        learningOutcomes: [
            'Aplicar el método de conteo de CHO por intercambio y por gramos en la práctica clínica.',
            'Calcular la razón insulina:carbohidrato para la terapia de insulina intensiva.',
            'Identificar fuentes de CHO en la gastronomía puertorriqueña con sus equivalentes.',
            'Diseñar planes de alimentación con distribución CHO óptima para DM2.',
        ],
        instructor: 'Lcda. María L. Torres Rivera, RDN, LD, CDCES',
        instructorBio: 'Educadora de diabetes certificada con más de 12 años de experiencia clínica en programas de educación en diabetes en Puerto Rico.',
        hours: 3.00,
        modules: null,
        premium: false,
        code: 'EC-2026-003',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'diagnostico-nutricional-pes',
        type: 'lectura',
        title: 'Dominio del Diagnóstico Nutricional: Formulación Precisa de Enunciados PES',
        shortDescription: 'Guía de lectura estructurada para dominar el formato PES con terminología AND/ICDA y casos prácticos aplicados.',
        longDescription: 'Esta lectura guiada cubre la estructura del diagnóstico nutricional en formato Problema-Etiología-Signos/Síntomas (PES), la terminología oficial de la Academy of Nutrition and Dietetics, errores frecuentes en la práctica clínica y casos de aplicación en múltiples patologías.',
        learningOutcomes: [
            'Construir enunciados PES precisos usando la terminología AND/ICDA.',
            'Identificar y corregir los errores más frecuentes en el diagnóstico nutricional.',
            'Aplicar el formato PES en diabetes, enfermedad renal, TCA y nutrición clínica general.',
        ],
        instructor: 'Lcda. Ana R. Collazo Pagán, MS, RDN, LD',
        instructorBio: 'Docente de nutrición clínica y autora de materiales educativos para el proceso de cuidado nutricional estandarizado.',
        hours: 2.00,
        modules: null,
        premium: false,
        code: 'EC-2026-004',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'ada-2024-guia-rapida',
        type: 'lectura',
        title: 'Estándares de Atención ADA 2024: Guía Rápida para el Dietista Clínico',
        shortDescription: 'Resumen ejecutivo de los cambios clave en los Estándares de Atención 2024 de la ADA con implicaciones para la práctica nutricional.',
        longDescription: 'Lectura de actualización rápida que resume los cambios más relevantes en los Standards of Medical Care in Diabetes 2024 de la American Diabetes Association. Énfasis en las secciones de terapia médica nutricional, objetivos glucémicos y nuevas recomendaciones farmacológicas con impacto directo en la intervención nutricional.',
        learningOutcomes: [
            'Identificar los cambios relevantes de la ADA 2024 para la práctica del dietista.',
            'Actualizar metas de HbA1c, glucemia en ayuno y posprandial según ADA 2024.',
            'Relacionar las recomendaciones de MNT con los nuevos agentes farmacológicos.',
        ],
        instructor: 'Dr. Jorge E. Méndez Vega, MD, FACP',
        instructorBio: 'Internista y endocrinólogo certificado. Colaborador académico en programas de actualización en diabetes para profesionales de la salud.',
        hours: 1.50,
        modules: null,
        premium: false,
        code: 'EC-2026-005',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'microbiota-patologia-metabolica',
        type: 'presentacion',
        title: 'Microbiota Intestinal y Patología Metabólica: Evidencia Actual y Aplicación Clínica',
        shortDescription: 'Presentación científica sobre el papel de la microbiota en DM2, obesidad y síndrome metabólico con estrategias dietéticas basadas en evidencia.',
        longDescription: 'Presentación académica de alto nivel que examina la evidencia actual sobre la relación entre la composición del microbioma intestinal y el desarrollo de la diabetes tipo 2, la obesidad y el síndrome metabólico. Incluye estrategias dietéticas de modulación de la microbiota con fundamento científico.',
        learningOutcomes: [
            'Describir los mecanismos por los que la microbiota intestinal influye en la resistencia a la insulina.',
            'Evaluar críticamente la evidencia sobre prebióticos, probióticos y dieta en patología metabólica.',
            'Identificar estrategias dietéticas de modulación microbiana aplicables en la práctica clínica.',
        ],
        instructor: 'Dra. Cristina M. Delgado Cruz, PhD, RDN',
        instructorBio: 'Investigadora en nutrición y microbioma en la Universidad de Puerto Rico. Publicaciones en revistas indexadas sobre dieta y disbiosis intestinal.',
        hours: 2.00,
        modules: null,
        premium: false,
        code: 'EC-2026-006',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'tca-abordaje-nutricional',
        type: 'curso',
        title: 'Abordaje Nutricional en Trastornos de la Conducta Alimentaria',
        shortDescription: 'Curso especializado en el tratamiento nutricional de la AN, BN y TCAP con enfoque en el modelo de práctica no dietético.',
        longDescription: 'Curso de formación avanzada para el dietista-nutricionista que interviene en equipos multidisciplinarios de TCA. Cubre los criterios DSM-5, el modelo de práctica no dietético, la rehabilitación nutricional progresiva, el manejo de la ansiedad alimentaria y el trabajo con la imagen corporal desde la perspectiva nutricional.',
        learningOutcomes: [
            'Aplicar el modelo de práctica no dietético en el tratamiento de la anorexia y bulimia nerviosa.',
            'Diseñar planes de rehabilitación nutricional progresiva para pacientes con AN.',
            'Identificar señales de recaída y criterios de derivación urgente en TCA.',
            'Colaborar efectivamente en equipos multidisciplinarios de tratamiento de TCA.',
        ],
        instructor: 'Lcda. Paola A. Reyes Fontán, MS, RDN, LD, CEDS',
        instructorBio: 'Especialista certificada en trastornos de la alimentación (CEDS). Coordinadora de un programa de tratamiento de TCA en San Juan, Puerto Rico.',
        hours: 8.00,
        modules: [
            { title: 'Diagnóstico, Evaluación y Rehabilitación Nutricional en TCA', hours: 4.00 },
            { title: 'Intervención Avanzada y Trabajo en Equipo Multidisciplinario', hours: 4.00 },
        ],
        premium: true,
        code: 'EC-2026-007',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'cirugia-bariatrica-seguimiento',
        type: 'taller',
        title: 'Nutrición Post-Cirugía Bariátrica: Protocolos de Seguimiento Clínico',
        shortDescription: 'Taller práctico sobre el manejo nutricional post-quirúrgico en manga gástrica, bypass y banda ajustable.',
        longDescription: 'Taller intensivo para dietistas-nutricionistas que participan en programas bariátricos. Cubre la progresión de textura post-quirúrgica, el manejo de déficits nutricionales comunes (hierro, vitamina B12, calcio, vitamina D), el seguimiento a largo plazo y el tratamiento del síndrome de dumping.',
        learningOutcomes: [
            'Diseñar la progresión dietética post-quirúrgica según el tipo de cirugía bariátrica.',
            'Identificar y manejar los déficits nutricionales más frecuentes post-cirugía.',
            'Calcular la suplementación vitamínico-mineral adecuada para cada tipo de cirugía.',
            'Reconocer el síndrome de dumping y su abordaje nutricional.',
        ],
        instructor: 'Lcdo. Roberto M. Valentín Cruz, MS, RDN, LD',
        instructorBio: 'Nutricionista de programa bariátrico en hospital universitario de Puerto Rico. Especializado en cirugía metabólica y obesidad severa.',
        hours: 4.00,
        modules: null,
        premium: false,
        code: 'EC-2026-008',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'nutricion-adulto-mayor',
        type: 'curso',
        title: 'Nutrición en el Adulto Mayor: Sarcopenia, Fragilidad y Calidad de Vida',
        shortDescription: 'Evaluación nutricional geriátrica integral, manejo de la sarcopenia y estrategias para optimizar la calidad de vida en el envejecimiento.',
        longDescription: 'Curso de actualización en nutrición geriátrica que cubre la evaluación nutricional del adulto mayor con herramientas validadas (MNA, SARC-F), el diagnóstico y tratamiento de la sarcopenia, el manejo de la disfagia orofaríngea, la polifarmacia y su impacto en el estado nutricional.',
        learningOutcomes: [
            'Aplicar el Mini Nutritional Assessment (MNA) y el SARC-F en la práctica clínica geriátrica.',
            'Diseñar intervenciones nutricionales para la prevención y tratamiento de la sarcopenia.',
            'Adaptar la consistencia de la dieta a los grados de disfagia según la escala IDDSI.',
            'Identificar interacciones nutriente-medicamento relevantes en el adulto mayor polimedicado.',
        ],
        instructor: 'Lcda. Ana R. Collazo Pagán, MS, RDN, LD',
        instructorBio: 'Docente de nutrición clínica con especial interés en nutrición geriátrica y el proceso de cuidado nutricional estandarizado.',
        hours: 6.00,
        modules: [
            { title: 'Evaluación Nutricional y Sarcopenia en el Envejecimiento', hours: 3.00 },
            { title: 'Disfagia, Polifarmacia y Casos Clínicos Geriátricos', hours: 3.00 },
        ],
        premium: false,
        code: 'EC-2026-009',
        enrolled: false,
        progress: 0,
    },
    {
        id: 'etica-practica-profesional',
        type: 'podcast',
        title: 'Ética en la Práctica Profesional del Nutricionista-Dietista de Puerto Rico',
        shortDescription: 'Serie de podcast sobre dilemas éticos reales en la práctica clínica, el código de ética AND y el marco legal puertorriqueño.',
        longDescription: 'Serie de episodios de podcast que exploran la ética profesional del nutricionista-dietista a través de casos reales anonimizados. Cubre el código de ética de la Academy of Nutrition and Dietetics, la Ley 82 de 1972, los límites profesionales, la confidencialidad del paciente y la toma de decisiones en situaciones complejas.',
        learningOutcomes: [
            'Aplicar el código de ética AND en situaciones clínicas complejas.',
            'Identificar los límites del ejercicio profesional del nutricionista bajo la Ley 82.',
            'Analizar dilemas éticos usando marcos de razonamiento moral estructurado.',
        ],
        instructor: 'Lcda. Sofía M. Berríos Colón, MS, RDN, LD, CDCES',
        instructorBio: 'Nutricionista-Dietista con trayectoria en práctica clínica, docencia y liderazgo profesional en el CNDPR.',
        hours: 1.50,
        modules: null,
        premium: false,
        code: 'EC-2026-010',
        enrolled: false,
        progress: 0,
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getOfferingById(id) {
    return CATALOG_OFFERINGS.find(o => o.id === id) || null;
}

function getOfferingsByType(type) {
    return CATALOG_OFFERINGS.filter(o => o.type === type);
}

function searchOfferings(query) {
    const q = (query || '').toLowerCase().trim();
    if (!q) return CATALOG_OFFERINGS;
    return CATALOG_OFFERINGS.filter(o =>
        o.title.toLowerCase().includes(q) ||
        o.shortDescription.toLowerCase().includes(q) ||
        o.instructor.toLowerCase().includes(q) ||
        o.type.toLowerCase().includes(q)
    );
}

function getEnrolledOfferings() {
    const enrollments = _getEnrollments();
    return CATALOG_OFFERINGS.filter(o => enrollments.includes(o.id));
}

function getNotEnrolledOfferings() {
    const enrollments = _getEnrollments();
    return CATALOG_OFFERINGS.filter(o => !enrollments.includes(o.id));
}

// Inicializar sessionStorage con la matrícula demo si no existe
(function initEnrollments() {
    if (!sessionStorage.getItem(KEY_ENROLLMENTS)) {
        sessionStorage.setItem(KEY_ENROLLMENTS, JSON.stringify(['dm2-actualizacion-clinica']));
    }
})();
