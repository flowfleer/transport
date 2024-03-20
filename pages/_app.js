import Layout from '../Components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp() {
  return (
    <>
      <Head>
      <title>Akshar International</title>
      <meta name="google-site-verification" content="fI2N7TIGSGLDKL8ng6xQlgud9Atdsynm4cFLpQ2ghIA" />
      <meta 
          name='description'
          content='Discover a wide variety of high-quality products for international import and export, including fresh fruits, vegetables, Indian spices, eco-friendly products, ready-to-eat meals, and more.' 
      />
      <meta
          name="export-import-service-provider-all-india"
          content="We are Exporting best quality product around the world, You need best product on time you are at right place Export import"
        />
        <meta
          name="best-service-provider-all-india"
          content="We help foreign company to introduce his best quality product in India and help them to find local partners in India"
        />
        <meta
          name="About-Us"
          content="Akshar International able to create its own goodwill and a name for itself. We are primarily exporters of all fresh fruits and vegetables, Indian spices, Ready to eat, Dehydrated vegetables, Eco friendly product, Premix tea, Peanut and pulses, Handicraft product, Frozen food, Wheat flour."
        />
        {/* open graph data */}
        <meta
          property="akshar international"
          content="AksharInternational - Import Export Service Provider"
        />
        <meta
          property="akshar internationals"
          content="AksharInternationals - Import Export Service Provider"
        />
        <meta
          name="keywords"
          content="Akshar International,Akshar Internationals,akshar international,akshar internationals import export service,import,export,import service,export service,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Jaimin" />
        {/* <link rel="icon" href="./Favicon.ico"/> */}
        <link rel="canonical" href="https://www.aksharinternationals.com/" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
        <link rel="manifest" href="./site.webmanifest"/>
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#eb3237"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Layout />
    </>
  )
}

export default MyApp
