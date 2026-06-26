const questions = [
    {
        id: 1,
        question: "What are three responsibilities of citizenship?",
        choices: [
            "Being loyal to Canada; recycling newspapers; serving in the navy",
            "Obeying the law; taking responsibility for oneself and one's family; serving on a jury",
            "Learning both official languages; voting in elections; belonging to a union",
            "Buying Canadian products; owning your own business; using less water"
        ],
        correctAnswer: 1,
        explanation: "These are listed responsibilities in Discover Canada."
    },
    {
        id: 2,
        question: "What does the Remembrance Day poppy symbolize?",
        choices: [
            "To remember our Sovereign",
            "To celebrate Confederation",
            "To honour prime ministers who have died",
            "To remember the sacrifice of Canadians who have served or died in wars"
        ],
        correctAnswer: 3,
        explanation: "The poppy honours those who served and died in wars."
    },
    {
        id: 3,
        question: "How are Members of Parliament chosen?",
        choices: [
            "Appointed by the United Nations",
            "Chosen by provincial premiers",
            "Elected by voters in their local constituency",
            "Elected by landowners and police chiefs"
        ],
        correctAnswer: 2,
        explanation: "MPs are elected by voters in their ridings."
    },
    {
        id: 4,
        question: "What is Canada's form of government?",
        choices: [
            "Absolute monarchy",
            "Constitutional monarchy and parliamentary democracy",
            "Presidential republic",
            "Single-party state"
        ],
        correctAnswer: 1,
        explanation: "Canada is a constitutional monarchy and parliamentary democracy."
    },
    {
        id: 5,
        question: "Who is the head of state in Canada?",
        choices: [
            "The Prime Minister",
            "The Governor General",
            "The Monarch (Queen or King)",
            "The Chief Justice"
        ],
        correctAnswer: 2,
        explanation: "The Monarch is Canada's head of state."
    },
    {
        id: 6,
        question: "What are the three branches of government?",
        choices: [
            "Executive, legislative, judicial",
            "Federal, provincial, municipal",
            "House, Senate, Crown",
            "Prime Minister, Cabinet, Parliament"
        ],
        correctAnswer: 0,
        explanation: "The three branches are executive, legislative, and judicial."
    },
    {
        id: 7,
        question: "What does Confederation mean?",
        choices: [
            "The joining of provinces to form Canada",
            "The end of the monarchy",
            "The start of World War I",
            "The creation of the Charter of Rights"
        ],
        correctAnswer: 0,
        explanation: "Confederation is the joining of provinces into Canada."
    },
    {
        id: 8,
        question: "Who were the founding peoples of Canada?",
        choices: [
            "English, French, and Americans",
            "First Nations, Inuit, and Métis",
            "British and Spanish",
            "Vikings and Portuguese"
        ],
        correctAnswer: 1,
        explanation: "Founding peoples include First Nations, Inuit, and Métis."
    },
    {
        id: 9,
        question: "What is the significance of the discovery of insulin?",
        choices: [
            "It cured smallpox",
            "It helped treat diabetes and saved lives",
            "It ended tuberculosis",
            "It was used in agriculture"
        ],
        correctAnswer: 1,
        explanation: "Insulin's discovery transformed diabetes treatment."
    },
    {
        id: 10,
        question: "Who is responsible for making federal laws?",
        choices: [
            "Provincial legislatures",
            "Municipal councils",
            "Parliament of Canada",
            "The Supreme Court"
        ],
        correctAnswer: 2,
        explanation: "Parliament makes federal laws."
    },
    {
        id: 11,
        question: "What is the capital city of Canada?",
        choices: [
            "Toronto",
            "Ottawa",
            "Montreal",
            "Vancouver"
        ],
        correctAnswer: 1,
        explanation: "Ottawa is the capital city of Canada."
    },
    {
        id: 12,
        question: "What is the highest honour a Canadian can receive?",
        choices: [
            "Order of Canada",
            "Nobel Prize",
            "Governor General's Award",
            "Victoria Cross"
        ],
        correctAnswer: 3,
        explanation: "Victoria Cross is the highest honour recognizing outstanding achievement."
    },
    {
        id: 13,
        question: "When you vote on election day, what do you do?",
        choices: [
            "Cast a ballot for a candidate",
            "Appoint a new judge",
            "Sign a petition",
            "Register to vote"
        ],
        correctAnswer: 0,
        explanation: "Cast a ballot for a candidate is what you do when you vote."
    },
    {
        id: 14,
        question: "Who is entitled to vote in federal elections?",
        choices: [
            "All residents of Canada",
            "Canadian citizens 18 years or older",
            "Permanent residents only",
            "Only property owners"
        ],
        correctAnswer: 1,
        explanation: "Canadian citizens 18 years or older are entitled to vote in federal elections."
    },
    {
        id: 15,
        question: "What does the term Inuit mean?",
        choices: [
            "The People",
            "People of the sea",
            "People of the north",
            "People of the plains"
        ],
        correctAnswer: 0,
        explanation: "Inuit literally means 'The People' in the Inuit Language."
    },
    {
        id: 16,
        question: "What is the role of the courts in Canada?",
        choices: [
            "Make laws",
            "Enforce taxes",
            "Interpret and apply the law",
            "Elect the Prime Minister"
        ],
        correctAnswer: 2,
        explanation: "Interpret and apply the law is the primary role of the courts."
    },
    {
        id: 17,
        question: "What is the Canadian Charter of Rights and Freedoms?",
        choices: [
            "A trade agreement",
            "A document that protects fundamental rights and freedoms",
            "A provincial law book",
            "A historical novel"
        ],
        correctAnswer: 1,
        explanation: "A document that protects fundamental rights and freedoms describes the Charter."
    },
    {
        id: 18,
        question: "What does the maple leaf on the flag represent?",
        choices: [
            "Canada's forests and nature",
            "A political party",
            "A military symbol",
            "A provincial emblem"
        ],
        correctAnswer: 0,
        explanation: "Canada's forests and nature are symbolized by the maple leaf on the flag."
    },
    {
        id: 19,
        question: "Who was Sir John A. Macdonald?",
        choices: [
            "First Prime Minister of Canada",
            "A famous hockey player",
            "A Supreme Court justice",
            "A British monarch"
        ],
        correctAnswer: 0,
        explanation: "First Prime Minister of Canada describes Sir John A. Macdonald."
    },
    {
        id: 20,
        question: "What is required to become a Canadian citizen by application?",
        choices: [
            "Be born in Canada only",
            "Meet residency, language, and knowledge requirements",
            "Own property in Canada",
            "Serve in the military"
        ],
        correctAnswer: 1,
        explanation: "Meet residency, language, and knowledge requirements are typical requirements to apply for citizenship."
    },
    {
        id: 21,
        question: "What is the role of the Governor General?",
        choices: [
            "Head of government",
            "Represents the Monarch in Canada",
            "Chief justice",
            "Leader of the opposition"
        ],
        correctAnswer: 1,
        explanation: "The Governor General represents the Monarch in Canada."
    },
    {
        id: 22,
        question: "Which two languages are Canada's official languages?",
        choices: [
            "English and Spanish",
            "French and German",
            "English and French",
            "French and Indigenous languages"
        ],
        correctAnswer: 2,
        explanation: "English and French are Canada's official languages."
    },
    {
        id: 23,
        question: "What is the name of Canada's national anthem?",
        choices: [
            "God Save the Queen",
            "O Canada",
            "The Maple Song",
            "True North"
        ],
        correctAnswer: 1,
        explanation: "O Canada is the national anthem."
    },
    {
        id: 24,
        question: "Who was the first Prime Minister of Canada?",
        choices: [
            "Wilfrid Laurier",
            "Sir John A. Macdonald",
            "Pierre Trudeau",
            "John Diefenbaker"
        ],
        correctAnswer: 1,
        explanation: "Sir John A. Macdonald was the first Prime Minister."
    },
    {
        id: 25,
        question: "What is the largest province by area?",
        choices: [
            "Ontario",
            "Quebec",
            "British Columbia",
            "Alberta"
        ],
        correctAnswer: 1,
        explanation: "Quebec is the largest province by area."
    },
    {
        id: 26,
        question: "What do the letters MP stand for?",
        choices: [
            "Municipal President",
            "Member of Parliament",
            "Minister of Provinces",
            "Master Planner"
        ],
        correctAnswer: 1,
        explanation: "MP stands for Member of Parliament."
    },
    {
        id: 27,
        question: "What is the purpose of the Canadian Charter of Rights and Freedoms?",
        choices: [
            "To set tax rates",
            "To protect fundamental rights and freedoms",
            "To list provincial powers",
            "To name national parks"
        ],
        correctAnswer: 1,
        explanation: "The Charter protects fundamental rights and freedoms."
    },
    {
        id: 28,
        question: "Who can serve on a jury in Canada?",
        choices: [
            "Any resident",
            "Canadian citizens chosen at random",
            "Only lawyers",
            "Only elected officials"
        ],
        correctAnswer: 1,
        explanation: "Canadian citizens are eligible for jury duty."
    },
    {
        id: 29,
        question: "What is the significance of the Canadian Pacific Railway?",
        choices: [
            "It connected eastern and western Canada",
            "It ended Confederation",
            "It was a warship",
            "It created the Charter"
        ],
        correctAnswer: 0,
        explanation: "The CPR connected east and west Canada."
    },
    {
        id: 30,
        question: "Which ocean is on Canada's west coast?",
        choices: [
            "Atlantic",
            "Arctic",
            "Pacific",
            "Indian"
        ],
        correctAnswer: 2,
        explanation: "The Pacific Ocean is on Canada's west coast."
    },
    {
        id: 31,
        question: "What is the role of the Prime Minister?",
        choices: [
            "Head of state",
            "Head of government and leader of the party in power",
            "Chief justice",
            "Governor of a province"
        ],
        correctAnswer: 1,
        explanation: "The Prime Minister is head of government and party leader."
    },
    {
        id: 32,
        question: "What does the term 'responsible government' mean?",
        choices: [
            "Government that is elected by the UN",
            "Government accountable to elected representatives",
            "Government run by the Monarch",
            "Government without elections"
        ],
        correctAnswer: 1,
        explanation: "Responsible government means elected officials are accountable to Parliament."
    },
    {
        id: 33,
        question: "Which province is officially bilingual (English and French)?",
        choices: [
            "Ontario",
            "Quebec",
            "New Brunswick",
            "Manitoba"
        ],
        correctAnswer: 2,
        explanation: "New Brunswick is officially bilingual."
    },
    {
        id: 34,
        question: "Who are the Métis?",
        choices: [
            "A European royal family",
            "People of mixed Indigenous and European ancestry with a distinct culture",
            "A political party",
            "A First Nations band"
        ],
        correctAnswer: 1,
        explanation: "The Métis are people of mixed Indigenous and European ancestry with a distinct culture."
    },
    {
        id: 35,
        question: "What is the role of the Senate?",
        choices: [
            "To make provincial laws",
            "To review and suggest changes to laws passed by the House of Commons",
            "To elect the Prime Minister",
            "To appoint judges"
        ],
        correctAnswer: 1,
        explanation: "The Senate reviews and suggests changes to legislation."
    },
    {
        id: 36,
        question: "What is Canada's currency?",
        choices: [
            "US dollar",
            "Canadian dollar",
            "Pound",
            "Euro"
        ],
        correctAnswer: 1,
        explanation: "Canada's currency is the Canadian dollar."
    },
    {
        id: 37,
        question: "What is the significance of the Battle of Vimy Ridge?",
        choices: [
            "A major Canadian victory in WWI that helped shape national identity",
            "A naval battle in WWII",
            "The founding of Toronto",
            "A treaty with the US"
        ],
        correctAnswer: 0,
        explanation: "Vimy Ridge was a major WWI victory important to Canadian identity."
    },
    {
        id: 38,
        question: "Who appoints Supreme Court judges?",
        choices: [
            "The public by vote",
            "The Prime Minister (on advice of Cabinet)",
            "Provincial premiers",
            "The Governor General alone"
        ],
        correctAnswer: 1,
        explanation: "Supreme Court judges are appointed by the Prime Minister (formally by the Governor General on advice)."
    },
    {
        id: 39,
        question: "What is the role of municipal government?",
        choices: [
            "Make federal laws",
            "Manage local services like police, fire, and zoning",
            "Appoint senators",
            "Run national defence"
        ],
        correctAnswer: 1,
        explanation: "Municipal governments manage local services."
    },
    {
        id: 40,
        question: "What is the Oath of Citizenship about?",
        choices: [
            "Pledging allegiance to the Monarch and to obey Canadian laws",
            "Promising to vote",
            "Swearing to speak both official languages",
            "Agreeing to pay taxes"
        ],
        correctAnswer: 0,
        explanation: "The Oath pledges allegiance to the Monarch and to obey Canadian laws."
    },
    {
        id: 41,
        question: "What is the role of the Lieutenant Governor in a province?",
        choices: [
            "Represents the Monarch in the province",
            "Leads the provincial police",
            "Elects MPs",
            "Runs municipal councils"
        ],
        correctAnswer: 0,
        explanation: "The Lieutenant Governor represents the Monarch provincially."
    },
    {
        id: 42,
        question: "Which province is Canada's smallest by area?",
        choices: [
            "Prince Edward Island",
            "Nova Scotia",
            "Newfoundland and Labrador",
            "New Brunswick"
        ],
        correctAnswer: 0,
        explanation: "Prince Edward Island is the smallest province by area."
    },
    {
        id: 43,
        question: "What is the significance of the Statute of Westminster (1931)?",
        choices: [
            "Gave Canada full legal freedom from Britain",
            "Created the Charter",
            "Began Confederation",
            "Ended Prohibition"
        ],
        correctAnswer: 0,
        explanation: "The Statute of Westminster granted legislative independence to dominions like Canada."
    },
    {
        id: 44,
        question: "Who can introduce a bill in the House of Commons?",
        choices: [
            "Any citizen",
            "A Member of Parliament",
            "A provincial premier",
            "The Governor General"
        ],
        correctAnswer: 1,
        explanation: "A Member of Parliament introduces bills in the House of Commons."
    },
    {
        id: 45,
        question: "What is the role of the Official Opposition?",
        choices: [
            "To form the government",
            "To question and hold the government to account",
            "To appoint judges",
            "To run municipal services"
        ],
        correctAnswer: 1,
        explanation: "The Official Opposition questions and holds the government to account."
    },
    {
        id: 46,
        question: "Which province has the largest population?",
        choices: [
            "Quebec",
            "Ontario",
            "British Columbia",
            "Alberta"
        ],
        correctAnswer: 1,
        explanation: "Ontario has the largest population."
    },
    {
        id: 47,
        question: "What is the purpose of the Canadian flag?",
        choices: [
            "To represent Canada and its people",
            "To show provincial boundaries",
            "To list laws",
            "To name the Prime Minister"
        ],
        correctAnswer: 0,
        explanation: "The flag represents Canada and its people."
    },
    {
        id: 48,
        question: "What is the highest court in Canada?",
        choices: [
            "Federal Court",
            "Provincial Court",
            "Supreme Court of Canada",
            "Court of Appeal"
        ],
        correctAnswer: 2,
        explanation: "The Supreme Court of Canada is the highest court."
    },
    {
        id: 49,
        question: "What is the role of the Royal Canadian Mounted Police (RCMP)?",
        choices: [
            "Provincial legislature",
            "National police service for federal law enforcement and many provinces/territories",
            "Military force",
            "Postal service"
        ],
        correctAnswer: 1,
        explanation: "The RCMP is a national police service for federal law enforcement and many provinces."
    },
    {
        id: 50,
        question: "What is the significance of the Quebec Act (1774)?",
        choices: [
            "It recognized French civil law and Catholic religion in Quebec",
            "It created the Charter",
            "It abolished slavery",
            "It started the CPR"
        ],
        correctAnswer: 0,
        explanation: "The Quebec Act recognized French civil law and Catholic religion in Quebec."
    },
    {
        id: 51,
        question: "What is a riding?",
        choices: [
            "A provincial park",
            "An electoral district represented by an MP",
            "A type of canoe",
            "A Senate committee"
        ],
        correctAnswer: 1,
        explanation: "A riding is an electoral district represented by an MP."
    },
    {
        id: 52,
        question: "Who is responsible for foreign affairs in Canada?",
        choices: [
            "Municipal councils",
            "Provincial premiers",
            "The federal government",
            "The Senate"
        ],
        correctAnswer: 2,
        explanation: "The federal government handles foreign affairs."
    },
    {
        id: 53,
        question: "What is the role of the Cabinet?",
        choices: [
            "To advise the Prime Minister and run government departments",
            "To interpret laws",
            "To elect the Governor General",
            "To manage municipal budgets"
        ],
        correctAnswer: 0,
        explanation: "The Cabinet advises the Prime Minister and runs departments."
    },
    {
        id: 54,
        question: "What does bilingualism mean in Canada?",
        choices: [
            "All provinces speak two languages",
            "English and French have equal status in federal institutions",
            "Everyone must speak both languages",
            "Only Quebec is bilingual"
        ],
        correctAnswer: 1,
        explanation: "Bilingualism means English and French have equal status in federal institutions."
    },
    {
        id: 55,
        question: "What is the significance of the War of 1812 for Canada?",
        choices: [
            "It helped define Canada's borders and identity",
            "It created the Charter",
            "It began Confederation",
            "It ended WWI"
        ],
        correctAnswer: 0,
        explanation: "The War of 1812 helped define Canada's borders and identity."
    },
    {
        id: 56,
        question: "What is the role of a provincial premier?",
        choices: [
            "Head of provincial government",
            "Head of state",
            "Chief justice",
            "Mayor"
        ],
        correctAnswer: 0,
        explanation: "A provincial premier is the head of the provincial government."
    },
    {
        id: 57,
        question: "What is the purpose of municipal zoning bylaws?",
        choices: [
            "To set federal taxes",
            "To control land use and development locally",
            "To appoint senators",
            "To run national parks"
        ],
        correctAnswer: 1,
        explanation: "Zoning bylaws control local land use and development."
    },
    {
        id: 58,
        question: "Who can apply for a passport in Canada?",
        choices: [
            "Any resident",
            "Canadian citizens",
            "Permanent residents only",
            "Tourists"
        ],
        correctAnswer: 1,
        explanation: "Canadian citizens are eligible to apply for a passport."
    },
    {
        id: 59,
        question: "What is the significance of the Canadian Charter being part of the Constitution?",
        choices: [
            "It is the supreme law protecting rights and freedoms",
            "It is a provincial guideline",
            "It is a trade agreement",
            "It is a municipal bylaw"
        ],
        correctAnswer: 0,
        explanation: "The Charter as part of the Constitution is the supreme law protecting rights and freedoms."
    },
    {
        id: 60,
        question: "What is multiculturalism in Canada?",
        choices: [
            "Forcing one culture on all",
            "Recognizing and celebrating diverse cultural backgrounds",
            "Banning immigration",
            "Only celebrating British culture"
        ],
        correctAnswer: 1,
        explanation: "Multiculturalism recognizes and celebrates diverse cultural backgrounds."
    },
    {
        id: 61,
        question: "What is the role of the Speaker of the House of Commons?",
        choices: [
            "Lead the government",
            "Represent the Monarch",
            "Preside over debates and maintain order",
            "Appoint senators"
        ],
        correctAnswer: 2,
        explanation: "The Speaker presides over debates and enforces rules."
    },
    {
        id: 62,
        question: "Which province is home to the national capital region?",
        choices: [
            "Ontario and Quebec",
            "British Columbia",
            "Nova Scotia",
            "Manitoba"
        ],
        correctAnswer: 0,
        explanation: "The national capital region spans Ontario and Quebec (Ottawa-Gatineau)."
    },
    {
        id: 63,
        question: "What is the significance of the Underground Railroad in Canadian history?",
        choices: [
            "It was a railway",
            "It helped enslaved people escape to freedom in Canada",
            "It was a trade route",
            "It was a military tunnel"
        ],
        correctAnswer: 1,
        explanation: "The Underground Railroad helped enslaved people reach freedom in Canada."
    },
    {
        id: 64,
        question: "What is the role of the Chief Justice of Canada?",
        choices: [
            "Head of the federal police",
            "Lead the Supreme Court and oversee judicial matters",
            "Lead the Senate",
            "Represent Canada abroad"
        ],
        correctAnswer: 1,
        explanation: "The Chief Justice leads the Supreme Court and judicial matters."
    },
    {
        id: 65,
        question: "Which territory is the largest by area?",
        choices: [
            "Yukon",
            "Northwest Territories",
            "Nunavut",
            "Newfoundland and Labrador"
        ],
        correctAnswer: 2,
        explanation: "Nunavut is the largest territory by area."
    },
    {
        id: 66,
        question: "What is the purpose of the Canadian Human Rights Act?",
        choices: [
            "To set immigration quotas",
            "To protect people from discrimination by federal institutions and employers",
            "To regulate trade",
            "To manage fisheries"
        ],
        correctAnswer: 1,
        explanation: "The Act protects people from discrimination by federal institutions and employers."
    },
    {
        id: 67,
        question: "Who represents Indigenous peoples in treaty negotiations?",
        choices: [
            "Municipal councils",
            "Indigenous leaders and governments",
            "The Prime Minister alone",
            "The Senate"
        ],
        correctAnswer: 1,
        explanation: "Indigenous leaders and governments represent Indigenous peoples in negotiations."
    },
    {
        id: 68,
        question: "What is the role of Elections Canada?",
        choices: [
            "Run provincial elections",
            "Administer federal elections and referendums",
            "Appoint MPs",
            "Manage municipal voting"
        ],
        correctAnswer: 1,
        explanation: "Elections Canada administers federal elections and referendums."
    },
    {
        id: 69,
        question: "What is the significance of the Constitution Act, 1982?",
        choices: [
            "It created the RCMP",
            "It patriated the Constitution and included the Charter of Rights and Freedoms",
            "It started Confederation",
            "It created the Senate"
        ],
        correctAnswer: 1,
        explanation: "The Constitution Act, 1982 patriated the Constitution and included the Charter."
    },
    {
        id: 70,
        question: "What is the meaning of 'peace, order and good government'?",
        choices: [
            "A phrase describing the purpose of Canadian federal government powers",
            "A military motto",
            "A provincial slogan",
            "A trade agreement"
        ],
        correctAnswer: 0,
        explanation: "The phrase describes the purpose of federal powers in Canada's Constitution."
    },
    {
        id: 71,
        question: "Who can propose changes to the Constitution?",
        choices: [
            "Any citizen by petition",
            "The federal and provincial governments through constitutional amendment processes",
            "Municipal councils",
            "The Governor General alone"
        ],
        correctAnswer: 1,
        explanation: "Constitutional amendments require federal and provincial government processes."
    },
    {
        id: 72,
        question: "What is the role of a Member of Provincial Parliament (MPP) or equivalent?",
        choices: [
            "Represent constituents at the provincial legislature",
            "Serve in the federal Cabinet",
            "Appoint judges",
            "Run municipal services"
        ],
        correctAnswer: 0,
        explanation: "Provincial legislators represent constituents at the provincial level."
    },
    {
        id: 73,
        question: "What is the significance of the Royal Proclamation of 1763?",
        choices: [
            "It recognized Indigenous land rights and set out rules for settlement",
            "It created the Charter",
            "It ended the War of 1812",
            "It started Confederation"
        ],
        correctAnswer: 0,
        explanation: "The Royal Proclamation recognized Indigenous rights and set settlement rules."
    },
    {
        id: 74,
        question: "What is the role of the Auditor General of Canada?",
        choices: [
            "Lead the Supreme Court",
            "Audit government spending and report to Parliament",
            "Run elections",
            "Appoint senators"
        ],
        correctAnswer: 1,
        explanation: "The Auditor General audits government spending and reports to Parliament."
    },
    {
        id: 75,
        question: "Which province was the first to join Confederation after 1867?",
        choices: [
            "Manitoba",
            "British Columbia",
            "Prince Edward Island",
            "Newfoundland and Labrador"
        ],
        correctAnswer: 0,
        explanation: "Manitoba joined Confederation in 1870."
    },
    {
        id: 76,
        question: "What is the significance of the Charter's guarantee of mobility rights?",
        choices: [
            "It allows Canadians to move and work anywhere in Canada",
            "It restricts travel",
            "It sets immigration quotas",
            "It governs municipal zoning"
        ],
        correctAnswer: 0,
        explanation: "Mobility rights let Canadians move and work anywhere in Canada."
    },
    {
        id: 77,
        question: "What is the role of the Commissioner of Official Languages?",
        choices: [
            "Enforce provincial language laws",
            "Promote and protect English and French language rights at the federal level",
            "Appoint judges",
            "Run schools"
        ],
        correctAnswer: 1,
        explanation: "The Commissioner promotes and protects federal English and French language rights."
    },
    {
        id: 78,
        question: "What is the purpose of public consultations in government?",
        choices: [
            "To ignore public opinion",
            "To gather input from citizens before making decisions",
            "To appoint MPs",
            "To run elections"
        ],
        correctAnswer: 1,
        explanation: "Public consultations gather citizen input before decisions are made."
    },
    {
        id: 79,
        question: "What is the significance of the Canadian flag being adopted in 1965?",
        choices: [
            "It replaced the Red Ensign and became a national symbol of unity",
            "It created the Charter",
            "It started Confederation",
            "It was a provincial flag"
        ],
        correctAnswer: 0,
        explanation: "The 1965 flag replaced the Red Ensign and became a national symbol."
    },
    {
        id: 80,
        question: "Who issues birth certificates in Canada?",
        choices: [
            "The federal government",
            "Provincial and territorial governments",
            "Municipal governments",
            "The Supreme Court"
        ],
        correctAnswer: 1,
        explanation: "Provincial and territorial governments issue birth certificates."
    },
    {
        id: 81,
        question: "What is the capital of British Columbia?",
        choices: [
            "Vancouver",
            "Victoria",
            "Kelowna",
            "Nanaimo"
        ],
        correctAnswer: 1,
        explanation: "Victoria is the capital of British Columbia."
    },
    {
        id: 82,
        question: "Which document sets out the division of powers between federal and provincial governments?",
        choices: [
            "The Charter of Rights and Freedoms",
            "The Constitution Act, 1867",
            "The Canadian Bill of Rights",
            "The Statute of Westminster"
        ],
        correctAnswer: 1,
        explanation: "The Constitution Act, 1867 outlines the division of powers."
    },
    {
        id: 83,
        question: "What is Canada's national winter sport?",
        choices: [
            "Lacrosse",
            "Ice hockey",
            "Curling",
            "Skiing"
        ],
        correctAnswer: 1,
        explanation: "Ice hockey is the national winter sport."
    },
    {
        id: 84,
        question: "Which province is primarily French speaking and has French as its official language?",
        choices: [
            "Quebec",
            "Ontario",
            "Manitoba",
            "Nova Scotia"
        ],
        correctAnswer: 0,
        explanation: "Quebec is primarily French speaking with French as its official language."
    },
    {
        id: 85,
        question: "What is the role of the Chief Electoral Officer?",
        choices: [
            "Appoint judges",
            "Run Elections Canada and ensure fair federal elections",
            "Lead the Senate",
            "Manage provincial elections"
        ],
        correctAnswer: 1,
        explanation: "The Chief Electoral Officer runs Elections Canada and ensures fair federal elections."
    },
    {
        id: 86,
        question: "What is the significance of the Canadian Shield?",
        choices: [
            "It is a major agricultural region",
            "It is a large area of ancient rock that shapes Canada's geography and resources",
            "It is a national park",
            "It is a river system"
        ],
        correctAnswer: 1,
        explanation: "The Canadian Shield is an ancient rock region important to Canada's geography and resources."
    },
    {
        id: 87,
        question: "Which of the following is a responsibility of permanent residents but not a right?",
        choices: [
            "Vote in federal elections",
            "Pay taxes and obey the law",
            "Apply for a passport",
            "Run for Parliament"
        ],
        correctAnswer: 1,
        explanation: "Paying taxes and obeying the law is a responsibility of permanent residents (and citizens)."
    },
    {
        id: 88,
        question: "What is the role of the Lieutenant Governor's assent to provincial laws?",
        choices: [
            "To draft laws",
            "To give formal approval so a bill becomes law",
            "To veto federal laws",
            "To appoint MPs"
        ],
        correctAnswer: 1,
        explanation: "The Lieutenant Governor's assent gives formal approval so a provincial bill becomes law."
    },
    {
        id: 89,
        question: "Which Canadian city hosted the 1976 Summer Olympics?",
        choices: [
            "Toronto",
            "Montreal",
            "Vancouver",
            "Calgary"
        ],
        correctAnswer: 1,
        explanation: "Montreal hosted the 1976 Summer Olympics."
    },
    {
        id: 90,
        question: "What is the primary purpose of the Canadian health care system?",
        choices: [
            "To provide universal access to medically necessary hospital and physician services",
            "To provide free dental care",
            "To provide free prescription drugs to all",
            "To privatize hospitals"
        ],
        correctAnswer: 0,
        explanation: "Canada's health care system aims to provide universal access to medically necessary hospital and physician services."
    },
    {
        id: 91,
        question: "Who is responsible for national defence in Canada?",
        choices: [
            "Municipal governments",
            "Provincial governments",
            "The federal government",
            "The United Nations"
        ],
        correctAnswer: 2,
        explanation: "The federal government is responsible for national defence."
    },
    {
        id: 92,
        question: "What is the role of the Privy Council Office?",
        choices: [
            "Manage municipal budgets",
            "Support the Prime Minister and Cabinet in policy and decision making",
            "Run provincial courts",
            "Administer elections"
        ],
        correctAnswer: 1,
        explanation: "The Privy Council Office supports the Prime Minister and Cabinet in policy and decision making."
    },
    {
        id: 93,
        question: "Which province joined Confederation in 1949?",
        choices: [
            "Newfoundland and Labrador",
            "Saskatchewan",
            "Alberta",
            "Manitoba"
        ],
        correctAnswer: 0,
        explanation: "Newfoundland and Labrador joined Confederation in 1949."
    },
    {
        id: 94,
        question: "What is the significance of the Charter's equality rights?",
        choices: [
            "They guarantee equal treatment under the law and protection from discrimination",
            "They set tax rates",
            "They create provincial boundaries",
            "They regulate trade"
        ],
        correctAnswer: 0,
        explanation: "Equality rights guarantee equal treatment and protection from discrimination."
    },
    {
        id: 95,
        question: "What is the role of the Governor General when no party has a clear majority?",
        choices: [
            "Declare a winner",
            "Decide whether to call an election or ask a leader to form government based on who can command confidence in the House",
            "Appoint the Prime Minister without consultation",
            "Dissolve provincial legislatures"
        ],
        correctAnswer: 1,
        explanation: "The Governor General decides whether to call an election or ask a leader to form government when there is no clear majority."
    },
    {
        id: 96,
        question: "Which of the following is a national holiday in Canada?",
        choices: [
            "Thanksgiving in October",
            "Independence Day",
            "Labour Day in September",
            "Both a and c"
        ],
        correctAnswer: 3,
        explanation: "Both Thanksgiving (October) and Labour Day (September) are national holidays."
    },
    {
        id: 97,
        question: "What is the significance of the North West Mounted Police becoming the RCMP?",
        choices: [
            "It created a national police force that served federal and many provincial policing roles",
            "It ended Confederation",
            "It created the Charter",
            "It was a military merger"
        ],
        correctAnswer: 0,
        explanation: "The transition created a national police force (RCMP) serving federal and many provincial roles."
    },
    {
        id: 98,
        question: "Who has the power to call a federal election?",
        choices: [
            "The Chief Justice",
            "The Governor General on the advice of the Prime Minister",
            "Provincial premiers",
            "The Speaker of the House"
        ],
        correctAnswer: 1,
        explanation: "The Governor General calls a federal election on the advice of the Prime Minister."
    },
    {
        id: 99,
        question: "What is the role of the Senate in representing regions?",
        choices: [
            "It represents regional interests by providing regional representation in Parliament",
            "It represents municipal governments",
            "It represents only the largest cities",
            "It represents foreign governments"
        ],
        correctAnswer: 0,
        explanation: "The Senate provides regional representation in Parliament."
    },
    {
        id: 100,
        question: "What must you do if you are summoned for jury duty?",
        choices: [
            "Ignore it",
            "Serve unless legally excused",
            "Pay a fee to avoid it",
            "Only attend if you are a public servant"
        ],
        correctAnswer: 1,
        explanation: "If summoned, you must serve on a jury unless legally excused."
    },
    {
        id: 101,
        question: "What is the capital of Saskatchewan?",
        choices: [
            "Regina",
            "Saskatoon",
            "Prince Albert",
            "Moose Jaw"
        ],
        correctAnswer: 0,
        explanation: "Regina is the capital of Saskatchewan."
    },
    {
        id: 102,
        question: "Which body is responsible for interpreting the Constitution?",
        choices: [
            "Parliament",
            "The Supreme Court of Canada",
            "The Governor General",
            "Provincial legislatures"
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court of Canada interprets the Constitution."
    },
    {
        id: 103,
        question: "What is the significance of the Klondike Gold Rush?",
        choices: [
            "It led to the founding of Vancouver",
            "It brought settlers and development to the Yukon",
            "It ended the fur trade",
            "It created the Canadian Pacific Railway"
        ],
        correctAnswer: 1,
        explanation: "The Klondike Gold Rush brought settlers and development to the Yukon."
    },
    {
        id: 104,
        question: "Which province is known as the birthplace of Confederation?",
        choices: [
            "Ontario",
            "Quebec",
            "Nova Scotia",
            "Prince Edward Island"
        ],
        correctAnswer: 3,
        explanation: "Prince Edward Island is often called the birthplace of Confederation for hosting the Charlottetown Conference."
    },
    {
        id: 105,
        question: "What is the role of the Minister of Finance?",
        choices: [
            "Oversee national defence",
            "Manage the government's finances and budget",
            "Lead provincial governments",
            "Appoint judges"
        ],
        correctAnswer: 1,
        explanation: "The Minister of Finance manages the government's finances and budget."
    },
    {
        id: 106,
        question: "What is the significance of the Battle of the Plains of Abraham?",
        choices: [
            "A decisive battle in 1759 that led to British control of New France",
            "A WWI battle",
            "The start of Confederation",
            "A treaty with Indigenous peoples"
        ],
        correctAnswer: 0,
        explanation: "The Plains of Abraham (1759) led to British control of New France."
    },
    {
        id: 107,
        question: "Which province has two official languages at the provincial level?",
        choices: [
            "Quebec",
            "New Brunswick",
            "Ontario",
            "Manitoba"
        ],
        correctAnswer: 1,
        explanation: "New Brunswick is officially bilingual at the provincial level."
    },
    {
        id: 108,
        question: "What is the role of the Commissioner of the Northwest Territories?",
        choices: [
            "Represent the Monarch in the territory",
            "Lead the territorial government and perform ceremonial duties similar to a Lieutenant Governor",
            "Appoint senators",
            "Run municipal councils"
        ],
        correctAnswer: 1,
        explanation: "The Commissioner leads territorial government and performs ceremonial duties similar to a Lieutenant Governor."
    },
    {
        id: 109,
        question: "What is the purpose of the Immigration and Refugee Protection Act?",
        choices: [
            "To regulate immigration and protect refugees in Canada",
            "To set tax rates for newcomers",
            "To manage provincial elections",
            "To create municipal bylaws"
        ],
        correctAnswer: 0,
        explanation: "The Act regulates immigration and protects refugees in Canada."
    },
    {
        id: 110,
        question: "What is the significance of the Trans-Canada Highway?",
        choices: [
            "It links Canada from coast to coast by road",
            "It is a railway",
            "It is a shipping route",
            "It is a provincial highway only"
        ],
        correctAnswer: 0,
        explanation: "The Trans-Canada Highway links Canada from coast to coast by road."
    },
    {
        id: 111,
        question: "Who can be a candidate in a federal election?",
        choices: [
            "Any Canadian citizen 18 years or older who meets nomination requirements",
            "Only current MPs",
            "Permanent residents",
            "Only party leaders"
        ],
        correctAnswer: 0,
        explanation: "Any Canadian citizen 18+ who meets nomination rules can be a federal candidate."
    },
    {
        id: 112,
        question: "What is the role of provincial courts?",
        choices: [
            "Interpret the Constitution",
            "Deal with most criminal, family, and civil matters at the provincial level",
            "Appoint the Prime Minister",
            "Run federal elections"
        ],
        correctAnswer: 1,
        explanation: "Provincial courts handle most criminal, family, and civil matters provincially."
    },
    {
        id: 113,
        question: "What is the significance of the 1980 and 1995 referendums in Quebec?",
        choices: [
            "They were votes on Quebec sovereignty and independence",
            "They created the Charter",
            "They joined provinces to Confederation",
            "They were municipal votes"
        ],
        correctAnswer: 0,
        explanation: "The 1980 and 1995 votes were referendums on Quebec sovereignty."
    },
    {
        id: 114,
        question: "What is the role of the Canadian Museum for Human Rights?",
        choices: [
            "To promote and educate about human rights in Canada and worldwide",
            "To manage immigration",
            "To run elections",
            "To appoint judges"
        ],
        correctAnswer: 0,
        explanation: "The museum promotes and educates about human rights."
    },
    {
        id: 115,
        question: "Which province is known for the Bay of Fundy and its high tides?",
        choices: [
            "Nova Scotia and New Brunswick",
            "Ontario",
            "Alberta",
            "Saskatchewan"
        ],
        correctAnswer: 0,
        explanation: "The Bay of Fundy with high tides is between Nova Scotia and New Brunswick."
    },
    {
        id: 116,
        question: "What is the role of provincial premiers in Canada's federal system?",
        choices: [
            "Represent provincial interests and lead provincial governments",
            "Appoint federal judges",
            "Run municipal councils",
            "Serve as Senators"
        ],
        correctAnswer: 0,
        explanation: "Premiers represent provincial interests and lead provincial governments."
    },
    {
        id: 117,
        question: "What is the significance of the Head Tax in Canadian history?",
        choices: [
            "A tax imposed on Chinese immigrants in the late 19th and early 20th centuries that discriminated against them",
            "A tax on all newcomers",
            "A tax on goods",
            "A tax on landowners"
        ],
        correctAnswer: 0,
        explanation: "The Head Tax was a discriminatory tax on Chinese immigrants."
    },
    {
        id: 118,
        question: "What is the role of the Canadian Border Services Agency (CBSA)?",
        choices: [
            "Manage national parks",
            "Enforce border and customs laws and facilitate legitimate travel and trade",
            "Run provincial police",
            "Appoint MPs"
        ],
        correctAnswer: 1,
        explanation: "The CBSA enforces border and customs laws and facilitates travel and trade."
    },
    {
        id: 119,
        question: "What is the purpose of the Official Languages Act?",
        choices: [
            "To make English the only official language",
            "To ensure federal services are available in English and French and to promote bilingualism",
            "To regulate provincial languages",
            "To ban other languages"
        ],
        correctAnswer: 1,
        explanation: "The Official Languages Act ensures federal services in English and French and promotes bilingualism."
    },
    {
        id: 120,
        question: "What is the significance of residential schools in Canadian history?",
        choices: [
            "They were institutions that attempted to assimilate Indigenous children and caused lasting harm",
            "They were public schools for all Canadians",
            "They were universities",
            "They were military academies"
        ],
        correctAnswer: 0,
        explanation: "Residential schools attempted to assimilate Indigenous children and caused lasting harm."
    },
    {
        id: 121,
        question: "What is the capital of Newfoundland and Labrador?",
        choices: [
            "St. John's",
            "Corner Brook",
            "Gander",
            "Labrador City"
        ],
        correctAnswer: 0,
        explanation: "St. John's is the capital of Newfoundland and Labrador."
    },
    {
        id: 122,
        question: "What is the primary role of the House of Commons?",
        choices: [
            "To interpret laws",
            "To represent Canadians and make federal laws",
            "To appoint provincial premiers",
            "To manage municipal services"
        ],
        correctAnswer: 1,
        explanation: "The House of Commons represents Canadians and makes federal laws."
    },
    {
        id: 123,
        question: "Which Canadian province is the only officially bilingual province?",
        choices: [
            "Quebec",
            "New Brunswick",
            "Ontario",
            "Manitoba"
        ],
        correctAnswer: 1,
        explanation: "New Brunswick is the only officially bilingual province."
    },
    {
        id: 124,
        question: "What is the significance of the Canadian Pacific Railway to Confederation?",
        choices: [
            "It was built after Confederation to unite the country physically and economically",
            "It ended Confederation",
            "It was a naval fleet",
            "It created the Charter"
        ],
        correctAnswer: 0,
        explanation: "The CPR was built after Confederation to physically and economically unite Canada."
    },
    {
        id: 125,
        question: "Who is responsible for appointing the Governor General?",
        choices: [
            "The Prime Minister (advises the Monarch who appoints)",
            "The Senate",
            "The Supreme Court",
            "Provincial premiers"
        ],
        correctAnswer: 0,
        explanation: "The Prime Minister advises the Monarch, who appoints the Governor General."
    },
    {
        id: 126,
        question: "What is the role of the federal Minister of Health?",
        choices: [
            "Run provincial hospitals",
            "Oversee national health policy and federal health programs",
            "Appoint municipal health officers",
            "Manage school curricula"
        ],
        correctAnswer: 1,
        explanation: "The federal Minister of Health oversees national health policy and federal programs."
    },
    {
        id: 127,
        question: "Which province is the largest producer of oil and gas in Canada?",
        choices: [
            "Ontario",
            "Alberta",
            "Quebec",
            "Nova Scotia"
        ],
        correctAnswer: 1,
        explanation: "Alberta is the largest producer of oil and gas in Canada."
    },
    {
        id: 128,
        question: "What is the purpose of the Canadian census?",
        choices: [
            "To elect MPs",
            "To collect demographic data used for planning and representation",
            "To set tax rates",
            "To appoint senators"
        ],
        correctAnswer: 1,
        explanation: "The census collects demographic data used for planning and representation."
    },
    {
        id: 129,
        question: "What is the significance of the Battle of Ypres for Canada?",
        choices: [
            "It was a major WWI battle where Canadians fought and suffered heavy casualties",
            "It ended WWII",
            "It was a naval battle",
            "It was a treaty signing"
        ],
        correctAnswer: 0,
        explanation: "Ypres was a major WWI battle with heavy Canadian casualties."
    },
    {
        id: 130,
        question: "What is the role of provincial legislatures?",
        choices: [
            "Make federal laws",
            "Make laws for provincial matters and represent provincial citizens",
            "Appoint the Prime Minister",
            "Run federal elections"
        ],
        correctAnswer: 1,
        explanation: "Provincial legislatures make laws for provincial matters and represent citizens."
    },
    {
        id: 131,
        question: "Which of the following is a responsibility of Canadian citizenship?",
        choices: [
            "Obey the law",
            "Serve on a jury when called",
            "Vote in elections",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All of the above are responsibilities of citizenship."
    },
    {
        id: 132,
        question: "What is the significance of the 1867 Confederation?",
        choices: [
            "It united three colonies into the Dominion of Canada under the Constitution Act, 1867",
            "It ended WWI",
            "It created the Charter",
            "It started the Trans-Canada Highway"
        ],
        correctAnswer: 0,
        explanation: "Confederation united colonies into the Dominion of Canada in 1867."
    },
    {
        id: 133,
        question: "Who is the head of the federal public service?",
        choices: [
            "The Clerk of the Privy Council",
            "The Chief Justice",
            "The Speaker of the House",
            "The Auditor General"
        ],
        correctAnswer: 0,
        explanation: "The Clerk of the Privy Council is head of the federal public service."
    },
    {
        id: 134,
        question: "What is the role of the provincial Attorney General?",
        choices: [
            "Lead provincial legal affairs and represent the Crown in legal matters",
            "Run municipal councils",
            "Appoint senators",
            "Manage federal courts"
        ],
        correctAnswer: 0,
        explanation: "The provincial Attorney General leads legal affairs and represents the Crown provincially."
    },
    {
        id: 135,
        question: "Which Canadian city is known as the financial centre of the country?",
        choices: [
            "Montreal",
            "Toronto",
            "Vancouver",
            "Calgary"
        ],
        correctAnswer: 1,
        explanation: "Toronto is Canada's financial centre."
    },
    {
        id: 136,
        question: "What is the role of the Canadian Armed Forces?",
        choices: [
            "Provide national defence and support international peace and security",
            "Run municipal police",
            "Manage immigration",
            "Oversee elections"
        ],
        correctAnswer: 0,
        explanation: "The Canadian Armed Forces provide national defence and support international peace and security."
    },
    {
        id: 137,
        question: "What is the significance of the Charter's guarantee of fundamental freedoms?",
        choices: [
            "It protects freedoms such as expression, religion, and peaceful assembly",
            "It sets tax rates",
            "It creates provincial boundaries",
            "It regulates trade"
        ],
        correctAnswer: 0,
        explanation: "Fundamental freedoms protect expression, religion, peaceful assembly, and more."
    },
    {
        id: 138,
        question: "Who is responsible for public education in Canada?",
        choices: [
            "The federal government",
            "Provincial and territorial governments",
            "Municipal governments",
            "The United Nations"
        ],
        correctAnswer: 1,
        explanation: "Provincial and territorial governments are responsible for public education."
    },
    {
        id: 139,
        question: "What is the role of the Commissioner of the Yukon?",
        choices: [
            "Represent the Monarch and perform territorial ceremonial and administrative duties similar to a Lieutenant Governor",
            "Appoint federal judges",
            "Run municipal elections",
            "Manage national parks"
        ],
        correctAnswer: 0,
        explanation: "The Commissioner of the Yukon performs ceremonial and administrative duties similar to a Lieutenant Governor."
    },
    {
        id: 140,
        question: "What must you demonstrate to become a Canadian citizen (for applicants 18-54)?",
        choices: [
            "Knowledge of Canada and language ability in English or French",
            "Ownership of property",
            "Military service",
            "A university degree"
        ],
        correctAnswer: 0,
        explanation: "Applicants aged 18-54 must demonstrate knowledge of Canada and language ability in English or French."
    },
    {
        id: 141,
        question: "What is the capital of Manitoba?",
        choices: [
            "Winnipeg",
            "Brandon",
            "Thompson",
            "Portage la Prairie"
        ],
        correctAnswer: 0,
        explanation: "Winnipeg is Manitoba's capital."
    },
    {
        id: 142,
        question: "What is the role of the Governor General's Speech from the Throne?",
        choices: [
            "To dissolve Parliament",
            "To outline the government's agenda at the start of a new session",
            "To appoint judges",
            "To call municipal elections"
        ],
        correctAnswer: 1,
        explanation: "The Speech from the Throne outlines the government's agenda for a new parliamentary session."
    },
    {
        id: 143,
        question: "Which river forms part of the border between Canada and the United States?",
        choices: [
            "St. Lawrence River",
            "Fraser River",
            "Mackenzie River",
            "Red River"
        ],
        correctAnswer: 0,
        explanation: "The St. Lawrence River forms part of the Canada-US border (and links the Great Lakes to the Atlantic)."
    },
    {
        id: 144,
        question: "What is the significance of the Charter's legal rights?",
        choices: [
            "They guarantee rights such as the right to a fair trial and protection against unreasonable search and seizure",
            "They set tax rates",
            "They create provinces",
            "They regulate trade"
        ],
        correctAnswer: 0,
        explanation: "Legal rights protect fair trial procedures and against unreasonable searches and seizures."
    },
    {
        id: 145,
        question: "Who is responsible for public safety and emergency preparedness at the federal level?",
        choices: [
            "Provincial premiers",
            "The federal government (Public Safety Canada)",
            "Municipal councils",
            "The RCMP only"
        ],
        correctAnswer: 1,
        explanation: "Public Safety Canada and the federal government handle national public safety and emergency preparedness."
    },
    {
        id: 146,
        question: "What is the role of the Official Opposition leader?",
        choices: [
            "Lead the government",
            "Lead the largest party not in government and hold the government to account",
            "Appoint senators",
            "Run provincial courts"
        ],
        correctAnswer: 1,
        explanation: "The Official Opposition leader leads the largest party not in government and holds the government to account."
    },
    {
        id: 147,
        question: "Which province is home to the city of Halifax?",
        choices: [
            "Nova Scotia",
            "New Brunswick",
            "Prince Edward Island",
            "Newfoundland and Labrador"
        ],
        correctAnswer: 0,
        explanation: "Halifax is in Nova Scotia."
    },
    {
        id: 148,
        question: "What is the significance of the Canadian Charter's language rights?",
        choices: [
            "They guarantee English and French language rights in certain federal and provincial institutions",
            "They ban other languages",
            "They require all Canadians to be bilingual",
            "They set provincial languages"
        ],
        correctAnswer: 0,
        explanation: "Language rights guarantee English and French rights in certain federal and provincial institutions."
    },
    {
        id: 149,
        question: "What is the role of the Minister of Indigenous Services?",
        choices: [
            "Manage municipal services",
            "Oversee federal programs and services for Indigenous peoples",
            "Appoint provincial premiers",
            "Run provincial courts"
        ],
        correctAnswer: 1,
        explanation: "The Minister of Indigenous Services oversees federal programs and services for Indigenous peoples."
    },
    {
        id: 150,
        question: "What is the significance of the Halifax Explosion (1917)?",
        choices: [
            "A major maritime disaster that devastated Halifax and led to large-scale relief efforts",
            "A battle in WWI",
            "The start of Confederation",
            "A treaty signing"
        ],
        correctAnswer: 0,
        explanation: "The Halifax Explosion was a devastating 1917 maritime disaster with major relief efforts."
    },
    {
        id: 151,
        question: "Which province is known for the oil sands in the Athabasca region?",
        choices: [
            "Saskatchewan",
            "Alberta",
            "Manitoba",
            "Ontario"
        ],
        correctAnswer: 1,
        explanation: "The Athabasca oil sands are in Alberta."
    },
    {
        id: 152,
        question: "What is the role of the federal Minister of Justice?",
        choices: [
            "Oversee federal legal affairs and act as Attorney General of Canada",
            "Run provincial courts",
            "Appoint municipal councils",
            "Manage elections"
        ],
        correctAnswer: 0,
        explanation: "The Minister of Justice oversees federal legal affairs and serves as Attorney General."
    },
    {
        id: 153,
        question: "What is the significance of the Canadian Charter's mobility rights?",
        choices: [
            "They allow Canadians to enter, remain in, and leave Canada",
            "They allow Canadians to move and work anywhere in Canada",
            "They set immigration quotas",
            "They regulate trade"
        ],
        correctAnswer: 1,
        explanation: "Mobility rights allow Canadians to move and work anywhere in Canada."
    },
    {
        id: 154,
        question: "Who is responsible for negotiating international treaties for Canada?",
        choices: [
            "Provincial governments",
            "The federal government",
            "Municipal governments",
            "The Senate alone"
        ],
        correctAnswer: 1,
        explanation: "The federal government negotiates international treaties for Canada."
    },
    {
        id: 155,
        question: "What is the role of the Canadian Human Rights Commission?",
        choices: [
            "Manage immigration",
            "Promote and protect human rights and investigate discrimination at the federal level",
            "Run provincial courts",
            "Appoint senators"
        ],
        correctAnswer: 1,
        explanation: "The Commission promotes and protects human rights and investigates federal discrimination."
    },
    {
        id: 156,
        question: "Which province's legislature sits in Charlottetown?",
        choices: [
            "Prince Edward Island",
            "Nova Scotia",
            "New Brunswick",
            "Newfoundland and Labrador"
        ],
        correctAnswer: 0,
        explanation: "Charlottetown is the capital of Prince Edward Island."
    },
    {
        id: 157,
        question: "What is the role of the Chief of the Defence Staff?",
        choices: [
            "Lead the Canadian Armed Forces and advise the government on military matters",
            "Appoint judges",
            "Run Elections Canada",
            "Lead the RCMP"
        ],
        correctAnswer: 0,
        explanation: "The Chief of the Defence Staff leads the Canadian Armed Forces and advises government on military matters."
    },
    {
        id: 158,
        question: "What is the significance of the 1999 creation of Nunavut?",
        choices: [
            "It created a new territory to give Inuit greater self-government and recognition",
            "It joined Confederation",
            "It created the Charter",
            "It was a provincial merger"
        ],
        correctAnswer: 0,
        explanation: "Nunavut's creation gave Inuit greater self-government and recognition in 1999."
    },
    {
        id: 159,
        question: "What is the role of the Parliamentary Budget Officer?",
        choices: [
            "Audit government spending",
            "Provide independent analysis of the nation's finances and the government's budgetary decisions to Parliament",
            "Run elections",
            "Appoint senators"
        ],
        correctAnswer: 1,
        explanation: "The Parliamentary Budget Officer provides independent financial analysis to Parliament."
    },
    {
        id: 160,
        question: "What is the purpose of Canada's multiculturalism policy?",
        choices: [
            "To assimilate newcomers",
            "To recognize and promote the cultural diversity of Canadians and ensure equal treatment",
            "To restrict immigration",
            "To make one culture official"
        ],
        correctAnswer: 1,
        explanation: "Multiculturalism recognizes and promotes cultural diversity and equal treatment."
    },
    {
        id: 161,
        question: "What is the capital of Ontario?",
        choices: [
            "Toronto",
            "Ottawa",
            "Kingston",
            "London"
        ],
        correctAnswer: 0,
        explanation: "Toronto is the capital of Ontario."
    },
    {
        id: 162,
        question: "What is the role of the Privy Council?",
        choices: [
            "Advise the Prime Minister and support Cabinet decision-making",
            "Run provincial courts",
            "Elect the Governor General",
            "Manage municipal budgets"
        ],
        correctAnswer: 0,
        explanation: "The Privy Council advises the Prime Minister and supports Cabinet decision-making."
    },
    {
        id: 163,
        question: "Which province is home to the city of Winnipeg?",
        choices: [
            "Saskatchewan",
            "Manitoba",
            "Ontario",
            "Alberta"
        ],
        correctAnswer: 1,
        explanation: "Winnipeg is the capital and largest city of Manitoba."
    },
    {
        id: 164,
        question: "What is the significance of the Statute of Westminster for Canada?",
        choices: [
            "It granted full legislative independence to Canada and other dominions",
            "It created the Charter",
            "It started Confederation",
            "It created the RCMP"
        ],
        correctAnswer: 0,
        explanation: "The Statute of Westminster granted full legislative independence to Canada and other dominions."
    },
    {
        id: 165,
        question: "What is the role of the Commissioner of Official Languages?",
        choices: [
            "Appoint judges",
            "Promote and protect language rights under the Official Languages Act",
            "Run provincial schools",
            "Manage municipal services"
        ],
        correctAnswer: 1,
        explanation: "The Commissioner promotes and protects language rights under the Official Languages Act."
    },
    {
        id: 166,
        question: "Which province is known for the city of Calgary?",
        choices: [
            "British Columbia",
            "Alberta",
            "Saskatchewan",
            "Manitoba"
        ],
        correctAnswer: 1,
        explanation: "Calgary is a major city in Alberta."
    },
    {
        id: 167,
        question: "What is the role of the Chief Electoral Officer?",
        choices: [
            "Lead the Supreme Court",
            "Oversee Elections Canada and ensure fair federal elections",
            "Appoint senators",
            "Run provincial elections"
        ],
        correctAnswer: 1,
        explanation: "The Chief Electoral Officer oversees Elections Canada and ensures fair federal elections."
    },
    {
        id: 168,
        question: "What is the significance of the Canadian Charter's democratic rights?",
        choices: [
            "They guarantee the right to vote and to run for public office",
            "They set tax rates",
            "They create provinces",
            "They regulate trade"
        ],
        correctAnswer: 0,
        explanation: "Democratic rights guarantee the right to vote and to run for public office."
    },
    {
        id: 169,
        question: "Which body is responsible for federal taxation and spending decisions?",
        choices: [
            "Provincial legislatures",
            "Parliament of Canada (House of Commons and Senate)",
            "Municipal councils",
            "The Supreme Court"
        ],
        correctAnswer: 1,
        explanation: "Parliament of Canada is responsible for federal taxation and spending."
    },
    {
        id: 170,
        question: "What is the role of the Governor General in relation to Parliament?",
        choices: [
            "To preside over the Supreme Court",
            "To give Royal Assent to federal bills and open and dissolve Parliament on advice",
            "To appoint provincial premiers",
            "To run municipal elections"
        ],
        correctAnswer: 1,
        explanation: "The Governor General gives Royal Assent and opens/dissolves Parliament on advice."
    },
    {
        id: 171,
        question: "Which province is the largest by population after Ontario?",
        choices: [
            "Quebec",
            "British Columbia",
            "Alberta",
            "Manitoba"
        ],
        correctAnswer: 0,
        explanation: "Quebec is the second-largest province by population after Ontario."
    },
    {
        id: 172,
        question: "What is the role of the federal Minister of Immigration?",
        choices: [
            "Manage municipal immigration offices",
            "Oversee federal immigration policy, programs, and services",
            "Appoint provincial premiers",
            "Run provincial courts"
        ],
        correctAnswer: 1,
        explanation: "The federal Minister of Immigration oversees immigration policy, programs, and services."
    },
    {
        id: 173,
        question: "What is the significance of the Battle of Passchendaele for Canada?",
        choices: [
            "A costly WWI battle with heavy Canadian casualties that is remembered for sacrifice",
            "A naval battle in WWII",
            "The founding of Ottawa",
            "A treaty with the US"
        ],
        correctAnswer: 0,
        explanation: "Passchendaele was a costly WWI battle remembered for Canadian sacrifice."
    },
    {
        id: 174,
        question: "What is the role of provincial premiers in intergovernmental relations?",
        choices: [
            "Represent provincial interests and negotiate with the federal government",
            "Appoint federal judges",
            "Run federal elections",
            "Lead municipal councils"
        ],
        correctAnswer: 0,
        explanation: "Premiers represent provincial interests and negotiate with the federal government."
    },
    {
        id: 175,
        question: "Which territory has Iqaluit as its capital?",
        choices: [
            "Yukon",
            "Northwest Territories",
            "Nunavut",
            "Nunavik"
        ],
        correctAnswer: 2,
        explanation: "Iqaluit is the capital of Nunavut."
    },
    {
        id: 176,
        question: "What is the role of the Supreme Court of Canada in legal disputes?",
        choices: [
            "Make federal budgets",
            "Interpret and apply the law as the final court of appeal",
            "Run provincial elections",
            "Appoint the Prime Minister"
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court interprets and applies the law as the final court of appeal."
    },
    {
        id: 177,
        question: "What is the significance of the Canadian Pacific Railway for immigration and settlement?",
        choices: [
            "It discouraged settlement",
            "It facilitated settlement and economic development across Canada",
            "It was only for military use",
            "It was a provincial project"
        ],
        correctAnswer: 1,
        explanation: "The CPR facilitated settlement and economic development across Canada."
    },
    {
        id: 178,
        question: "What is the role of municipal councils?",
        choices: [
            "Make federal laws",
            "Provide local services such as water, policing, transit, and zoning",
            "Appoint senators",
            "Interpret the Constitution"
        ],
        correctAnswer: 1,
        explanation: "Municipal councils provide local services like water, policing, transit, and zoning."
    },
    {
        id: 179,
        question: "Which province's capital is Quebec City?",
        choices: [
            "Ontario",
            "Quebec",
            "New Brunswick",
            "Nova Scotia"
        ],
        correctAnswer: 1,
        explanation: "Quebec City is the capital of the province of Quebec."
    },
    {
        id: 180,
        question: "What is the purpose of Canada's refugee system?",
        choices: [
            "To refuse all asylum claims",
            "To protect people fleeing persecution and provide a process for refugee protection",
            "To manage municipal housing",
            "To set provincial tax rates"
        ],
        correctAnswer: 1,
        explanation: "Canada's refugee system protects people fleeing persecution and provides a process for protection."
    },
    {
        id: 181,
        question: "What is the capital of New Brunswick?",
        choices: [
            "Fredericton",
            "Saint John",
            "Moncton",
            "Bathurst"
        ],
        correctAnswer: 0,
        explanation: "Fredericton is the capital of New Brunswick."
    },
    {
        id: 182,
        question: "Which document must all levels of government in Canada follow?",
        choices: [
            "The Charter of Rights and Freedoms",
            "The Constitution",
            "The Canadian Bill of Rights",
            "The Official Languages Act"
        ],
        correctAnswer: 1,
        explanation: "The Constitution is the supreme law that all governments must follow."
    },
    {
        id: 183,
        question: "What is the role of a Member of Parliament in Ottawa?",
        choices: [
            "Represent constituents and make federal laws",
            "Run provincial schools",
            "Appoint municipal councillors",
            "Manage local police forces"
        ],
        correctAnswer: 0,
        explanation: "MPs represent constituents and make federal laws in Parliament."
    },
    {
        id: 184,
        question: "Which Canadian province is the only one with a legislature called the National Assembly?",
        choices: [
            "Quebec",
            "Ontario",
            "Nova Scotia",
            "Manitoba"
        ],
        correctAnswer: 0,
        explanation: "Quebec's provincial legislature is called the National Assembly."
    },
    {
        id: 185,
        question: "What is the significance of the Group of Seven in Canadian culture?",
        choices: [
            "A political party",
            "A group of early 20th-century Canadian landscape painters",
            "A trade union",
            "A sports team"
        ],
        correctAnswer: 1,
        explanation: "The Group of Seven were early 20th-century Canadian landscape painters influential in national art."
    },
    {
        id: 186,
        question: "What is the role of the Minister of Finance in relation to the federal budget?",
        choices: [
            "Draft and present the federal budget to Parliament",
            "Appoint provincial premiers",
            "Run municipal budgets",
            "Oversee provincial education"
        ],
        correctAnswer: 0,
        explanation: "The Minister of Finance drafts and presents the federal budget to Parliament."
    },
    {
        id: 187,
        question: "Which body can strike down a law that violates the Constitution?",
        choices: [
            "The House of Commons",
            "The Supreme Court of Canada",
            "The Governor General",
            "The Senate"
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court of Canada can rule laws unconstitutional."
    },
    {
        id: 188,
        question: "What is the significance of the Canadian Charter's protection of minority language education rights?",
        choices: [
            "It guarantees access to education in English or French for certain minority language communities",
            "It requires all schools to teach both languages",
            "It bans other languages in schools",
            "It sets provincial curricula"
        ],
        correctAnswer: 0,
        explanation: "Minority language education rights guarantee access to schooling in English or French for qualifying communities."
    },
    {
        id: 189,
        question: "Which province is known for the city of St. John's and the Avalon Peninsula?",
        choices: [
            "Newfoundland and Labrador",
            "Prince Edward Island",
            "Nova Scotia",
            "New Brunswick"
        ],
        correctAnswer: 0,
        explanation: "Newfoundland and Labrador includes St. John's and the Avalon Peninsula."
    },
    {
        id: 190,
        question: "What is the role of the federal Department of Fisheries and Oceans?",
        choices: [
            "Manage national parks",
            "Protect and manage Canada's fisheries and oceans resources",
            "Run municipal harbours",
            "Appoint senators"
        ],
        correctAnswer: 1,
        explanation: "Fisheries and Oceans protect and manage Canada's fisheries and ocean resources."
    },
    {
        id: 191,
        question: "What is the significance of the 1947 Canadian Citizenship Act?",
        choices: [
            "It created Canadian citizenship separate from British subject status",
            "It started Confederation",
            "It created the Charter",
            "It formed the RCMP"
        ],
        correctAnswer: 0,
        explanation: "The 1947 Act established Canadian citizenship distinct from British subject status."
    },
    {
        id: 192,
        question: "What is the role of the provincial education minister?",
        choices: [
            "Oversee provincial education policy and school systems",
            "Run federal universities",
            "Appoint Supreme Court judges",
            "Manage municipal libraries"
        ],
        correctAnswer: 0,
        explanation: "The provincial education minister oversees education policy and school systems."
    },
    {
        id: 193,
        question: "Which Canadian symbol appears on the national flag?",
        choices: [
            "A beaver",
            "A maple leaf",
            "A loon",
            "A fleur-de-lis"
        ],
        correctAnswer: 1,
        explanation: "The maple leaf is the central symbol on Canada's flag."
    },
    {
        id: 194,
        question: "What is the role of the Bank of Canada?",
        choices: [
            "Set provincial tax rates",
            "Manage monetary policy and issue Canadian banknotes",
            "Run commercial banks",
            "Appoint the Prime Minister"
        ],
        correctAnswer: 1,
        explanation: "The Bank of Canada manages monetary policy and issues banknotes."
    },
    {
        id: 195,
        question: "What is the significance of the Indian Act in Canadian history?",
        choices: [
            "A law that has governed many aspects of Indigenous life and has been the subject of criticism and reform",
            "A trade agreement",
            "A provincial statute",
            "A municipal bylaw"
        ],
        correctAnswer: 0,
        explanation: "The Indian Act has governed many aspects of Indigenous life and is widely criticized and reformed."
    },
    {
        id: 196,
        question: "Who is responsible for negotiating and signing treaties with other countries on behalf of Canada?",
        choices: [
            "Provincial premiers",
            "The federal government",
            "Municipal councils",
            "The Senate alone"
        ],
        correctAnswer: 1,
        explanation: "The federal government negotiates and signs international treaties for Canada."
    },
    {
        id: 197,
        question: "What is the role of the Canadian Human Rights Tribunal?",
        choices: [
            "Make federal laws",
            "Hear and decide complaints of discrimination under federal human rights law",
            "Run provincial courts",
            "Appoint the Governor General"
        ],
        correctAnswer: 1,
        explanation: "The Tribunal hears complaints of discrimination under federal human rights law."
    },
    {
        id: 198,
        question: "Which province's capital is Charlottetown?",
        choices: [
            "Prince Edward Island",
            "Nova Scotia",
            "New Brunswick",
            "Newfoundland and Labrador"
        ],
        correctAnswer: 0,
        explanation: "Charlottetown is the capital of Prince Edward Island."
    },
    {
        id: 199,
        question: "What is the purpose of the Official Languages Act at the federal level?",
        choices: [
            "To make English the only official language",
            "To ensure federal services are available in English and French and to support bilingualism",
            "To regulate provincial languages",
            "To ban other languages"
        ],
        correctAnswer: 1,
        explanation: "The Official Languages Act ensures federal services in English and French and supports bilingualism."
    },
    {
        id: 200,
        question: "What must new citizens do at a citizenship ceremony?",
        choices: [
            "Take the Oath of Citizenship and receive a citizenship certificate",
            "Register to vote only",
            "Pay a new tax",
            "Serve on a jury immediately"
        ],
        correctAnswer: 0,
        explanation: "New citizens take the Oath of Citizenship and receive a citizenship certificate at the ceremony."
    }
];
