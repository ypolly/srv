import Head from 'next/head';

const header = () => {
    return(
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="description" content="Elite home cleaning with Sweden's best paid home cleaners – 50% higher salary than in collective agreements. 480 kr/h. Open Mon-Sun 9-22, at 0770-16 16 16." />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Servia™ AB – The Best Paid Maid™</title>
        <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="./fonts/fonts.css" />
    </Head>
    )
}

export default header;