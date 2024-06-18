const Banner = () => {
    return (

        // Banner with a header, text and a background image

        <div id="bannerContainer" class="bg-[url('https://www.minuc.se/globalassets/produktsidor/forlustanmalan/forlustanmalan-hero-desktop.png')] bg-center flex flex-col text-center justify-center pt-20  w-full h-[360px] md:h-[460px] w-full mx-auto">
            <section id="bannerText" class="w-full h-full">
                <span id="Headline" class="text-4xl md:text-6xl text-gray-100 font-semibold">
                    Spärra körkort eller annan ID-handling till UC
                </span>
                <p id="Text" class="mt-20 text-md md:text-lg text-gray-100 font-semibold">
                    Minska risken för bedrägerier med tjänsten Förlustanmälan, och anmäl ditt borttappade körkort eller ID-kort!
                </p>
            </section>
        </div>
    )
};

export default Banner;