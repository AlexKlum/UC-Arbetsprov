const Content = () => {
    return (

        <div id="contentContainer" class="w-auto md:w-3/5 h-full mt-4 md:mt-10 pb-4 md:pb-20 mx-auto flex flex-col md:flex-row justify-center items-center" >

            {/* Main Content */}

            <section id="mainContent" class="bg-gray-100 border rounded-lg border-gray-900 p-2 md:p-10 flex flex-col justify-center items-start w-auto md:w-5/6 h-auto">

                {/* Top Text */}

                <span id="headline" class="text-3xl md:px-4 text-gray-700 font-semibold text-left">
                    Hur funkar Förlustanmälan?
                </span>
                <span id="topText" class="text-md text-gray-700 font-normal mt-2 md:px-4">
                    Om du förlorat ditt ID-kort, körkort eller pass bör du anmäla det direkt till oss på UC. Då minskar risken för dig att bli utsatt för bedrägerier.
                    <br />
                    <br />
                    Alla som är folkbokförda i Sverige, och är över 16 år, kan förlustanmäla borttappad eller stulen ID-handling till oss på UC. Det gör du genom att ringa vår automatiska telefontjänst, dygnet runt, <b>0900-101 20 30</b>. Samtalet kostar 95 kr. Tjänsten fungerar inte med kontantkort.
                    <br />
                    <br />
                    Beställer du UC ID-Skydd så bjuder vi dig på Förlustanmälningsavgiften (95 kr) - för att beställa, ring UC Kundservice på telefon: <b>0771-20 22 77</b>.
                </span>

                {/* List Text */}

                <span class="text-lg md:text-xl mt-8 md:px-4 text-gray-700 font-semibold text-left">
                    Förlustanmälan - en enkel åtgärd som ger bra skydd.
                </span>
                <ol class="list-disc ml-4 md:ml-6 flex flex-col justify-center text-left w-auto">
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            Du ringer till UC automatiska telefontjänst och anmäler borttappad eller stulen ID-handling. Dygnet runt. Samtalet kostar 95 kr, vilket dras på din telefonräkning.
                        </span>
                    </li>
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            Vi lägger in en notering om förlorad ID-handling i din kreditupplysning.
                        </span>
                    </li>
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            När ett företag tar en kreditupplysning från UC på dig ser de att du förlorat din ID-handling. På så sätt kan företaget upptäcka om personen som använder din ID-handling försöker missbruka den.
                        </span>
                    </li>
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            Du själv kan dock legitimera dig med annan eller ny legitimation.
                        </span>
                    </li>
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            Vår notering om förlorad ID-handling ligger kvar i två år.
                        </span>
                    </li>
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            Du kan närsomhelst återkalla uppgifterna om du tex själv hittar din ID-handling. Vill du häva din spärr använder du den blankett du fick skickad till dig när spärren aktiverades.
                        </span>
                    </li>
                    <li class="mt-4">
                        <span class="text-md text-gray-700 font-normal">
                            Pass och andra ID-handlingar bör även förlustanmälas hos Polisen för att det ska spärras som resehandling.
                        </span>
                    </li>
                </ol>
            </section>


            {/* Right Side Content */}

            <aside id="sideContent" class="flex flex-col justify-center mt-6 md:mt-0 md:ml-6 md:w-1/3 h-auto">
                <div class="bg-gray-100 border rounded-lg border-gray-900 p-8 flex flex-col justify-center">
                    <span class="text-2xl text-gray-700 font-semibold">
                        Anmäl förlust
                    </span>
                    <span class="text-md text-gray-700 font-normal mt-2">
                        Ring vår automatiska telefontjänst, dygnet runt. Samtalet kostar 95 kr. Tjänsten fungerar inte med kontantkort.
                    </span>
                    <span class="text-xl text-gray-700 font-semibold mt-2">
                        0900-101 20 30
                    </span>
                    <span class="text-md text-gray-700 font-normal mt-4">
                        Om du befinner dig utomlands når du förlustanmälan på nedanstående nummer.
                    </span>
                    <span class="text-md text-gray-700 font-normal mt-2">
                        <b>+46 900-101 20 30</b>
                    </span>
                </div>

                <div class="bg-gray-100 border rounded-lg border-gray-900 p-8 mt-6 md:mt-6 flex flex-col justify-center">
                    <span class="text-2xl text-gray-700 font-semibold">
                        Redan utsatt för bedrägeri?
                    </span>
                    <span class="text-md text-gray-700 font-normal mt-2">
                        Är du redan utsatt för ett bedrägeri kan det vara en god idé att helt spärra din kreditupplysning hos UC. Då minskar du risken för fortsatta bedrägerier.
                    </span>
                    <button type="button" class="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm w-60 px-4 py-2 mt-6 text-center">
                        Beställ här!
                    </button>
                </div>
            </aside>
        </div >
    )
}

export default Content;