const Navbar = () => {
    return (

        <div className="navContainer" class="w-full">


            {/* Top Navbar & Login Button*/}

            <nav id="topNavbar" class="border-gray-200 bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div class="inline-flex">
                        <a href="#" class="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:underline focus:z-10">
                            Företag
                        </a>
                        <a href="#" class="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:underline focus:z-10">
                            Privatperson
                        </a>
                    </div>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-4 py-2 text-center">
                            Logga in
                        </button>
                    </div>
                </div>
            </nav>


            {/* Main Navbar With Logo and Dropdown Menus*/}

            <nav id="mainNavbar" class="border-gray-600 bg-gray-900">
                <div class="flex flex-wrap justify-flex-start items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://www.minuc.se/dist/compiled/fonts/7da0495dbb45ae895e64.svg" class="h-10 mr-10" alt="UC Logo" />
                    </a>
                    <div id="megaMenu" class="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col p-0 mt-4 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">


                            {/* First Dropdown Menu */}

                            <li>
                                <div class="dropdownDiv1">
                                    <button id="dropdownButton1" data-collapse-toggle="dropdownMenu1" data-dropdown-trigger="{hover|click}" class="dropdownButton1 flex items-center justify-between w-full text-lg md:text-lg py-2 px-3 text-white rounded md:w-auto hover:underline md:p-0">
                                        Produkter & tjänster
                                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropdownMenu1" class="dropdownMenu1 mt-1 bg-gray-800 border-gray-600 shadow-sm border-y right-0 w-full">
                                        <div class="grid max-w-screen-xl px-4 py-8 mx-auto text-white sm:grid-cols-2 md:px-6">
                                            <ul>
                                                <h2 class="h2Text pb-4 text-2xl font-semibold">
                                                    Din information
                                                </h2>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Kreditkollen
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Obegränsad tillgång till din kreditinformation
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Min Upplysning
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Komplett nulägesrapport om din kreditinformation
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Mitt Kreditbetyg
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Tillgång till ditt kreditbetyg i en vecka
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Digital Brevlåda
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Få dina upplysningskopior digitalt
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <h2 class="h2Text text-2xl pb-4 font-semibold">
                                                    Känn dig trygg
                                                </h2>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            ID-Skydd
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Löpande bevakning av dina personliga uppgifter
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Förlustanmälan
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Anmäl borttappade ID-handlingar
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Bedrägerispärr
                                                        </div>
                                                        <span class="text-sm text-gray-400">
                                                            Spärra eller lås upp ditt personnummer
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Second Dropdown Button & Menu */}

                            <li>
                                <div class="dropdownDiv2">
                                    <button id="dropdownButton2" data-collapse-toggle="dropdownMenu2" data-dropdown-trigger="{hover|click}" class="flex items-center justify-between w-full text-lg py-2 px-3 text-white rounded md:w-auto hover:underline md:p-0">
                                        Artiklar & kunskap
                                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropdownMenu2" class="dropdownMenu2 mt-1 border-gray-600 shadow-sm bg-gray-800 border-y lg:absolute right-0 w-full">
                                        <div class="grid max-w-screen-xl px-4 py-8 mx-auto text-white sm:grid-cols-2 md:px-6">
                                            <ul>
                                                <h2 class="h2Text text-2xl pb-4 font-semibold">
                                                    Kategorier
                                                </h2>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Alla artiklar
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Privatekonomi
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            ID-Stöld
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <h2 class="h2Text text-2xl pb-4 font-semibold">
                                                    Särskilt utvalda artiklar
                                                </h2>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            UC Riskprognos
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Vad är identitetsstöld?
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Om kreditvärdighet
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-700">
                                                        <div class="font-semibold">
                                                            Om betalningsanmärkning
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
};

export default Navbar;