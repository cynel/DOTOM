// Base de données structurée certifiée (Source : Centre (1).pdf)
const togoEmergencyContacts = {
    maritime: [
        { name: "Centre d'écoute et de conseils de Novissi", phone: "90366843", loc: "Lomé commune, À Novissi[cite: 5]" },
        { name: "Centre digitalisé d'aide juridique (CAJUD) - WILDAF-TOGO", phone: "90243786", loc: "Lomé[cite: 5]" },
        { name: "Centre d'écoute et d'assistance juridique de Novissi", phone: "70167691", loc: "Lomé[cite: 5]" },
        { name: "Centre médico-psycho-judiciaire - CHU SO Lomé", phone: "98504956", loc: "Dans l'enceinte du CHU SO[cite: 5]" },
        { name: "ONE STOP CENTER (Ministère Action Sociale)", phone: "90035790", loc: "Lomé, Enceinte du CMS Adidogomé[cite: 5]" },
        { name: "Centre d'écoute de Tsévié", phone: "92410493", loc: "Tsévié, face à la DOSI[cite: 5]" },
        { name: "Centre d'écoute et d'assistance juridique de Vogan", phone: "91055900", loc: "Vogan, à côté de la polyclinique[cite: 5]" }
    ],
    plateaux: [
        { name: "Centre d'écoute et d'assistance juridique de Kpalimé", phone: "91542308", loc: "Kpalimé, Derrière la préfecture[cite: 5]" },
        { name: "Centre d'écoute et d'assistance juridique d'Atakpamé", phone: "90319261", loc: "Atakpamé, Centre de santé d'AKALALE[cite: 5]" },
        { name: "Clinique ATBEF Plateaux", phone: "24400218", loc: "Atakpamé, près du terrain municipal[cite: 5]" }
    ],
    centrale: [
        { name: "Maison de la femme de Sotouboua", phone: "90921122", loc: "Sotouboua, proche radio cosmos[cite: 5]" },
        { name: "Centre d'écoute des victimes de VBG de Sokodé", phone: "90832122", loc: "Sokodé, Quartier Tchalo[cite: 5]" },
        { name: "Clinique ATBEF Centrale / Centre des Jeunes", phone: "25500246", loc: "Sokodé, derrière la gare routière[cite: 5]" }
    ],
    kara: [
        { name: "Centre d'écoute et de conseils de Kara", phone: "92675686", loc: "Direction régionale de l'action sociale[cite: 5]" },
        { name: "Clinique ATBEF Grand Nord", phone: "26600580", loc: "Kara, Quartier Tchintchinda[cite: 5]" },
        { name: "Centre d'écoute et de conseils de Kantė", phone: "90983019", loc: "Kantè, Enceinte action sociale[cite: 5]" }
    ],
    savanes: [
        { name: "Centre d'écoute et de conseils de Dapaong", phone: "90313252", loc: "Dapaong[cite: 5]" },
        { name: "Centre d'écoute et de conseils de Naki-Est", phone: "92196949", loc: "Naki-Est, proche locaux préfecture[cite: 5]" },
        { name: "Maison de la femme de Cinkassé", phone: "90112415", loc: "Cinkassé[cite: 5]" }
    ]
};

function filterRegion() {
    const select = document.getElementById('region-select');
    const output = document.getElementById('contacts-output');
    const selectedRegion = select.value;

    if (!selectedRegion) {
        output.innerHTML = '<p class="text-center text-slate-500 text-sm py-4">Les contacts filtrés s\'afficheront ici.</p>';
        return;
    }

    const units = togoEmergencyContacts[selectedRegion];
    output.innerHTML = `<h4 class="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">Structures Secouristes (${units.length}) :</h4>`;

    units.forEach(center => {
        // Formate l'affichage pour l'œil humain (ex: 90 24 37 86)
        const printableNumber = center.phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
        
        output.innerHTML += `
            <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                    <h5 class="text-sm font-bold text-white">${center.name}</h5>
                    <p class="text-xs text-slate-400 mt-0.5">📍 ${center.loc}</p>
                </div>
                <a href="tel:${center.phone}" class="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-xs font-black px-4 py-2.5 rounded-lg inline-flex items-center justify-center space-x-1.5 transition">
                    <span>📞 Appeler ${printableNumber}</span>
                </a>
            </div>
        `;
    });
}