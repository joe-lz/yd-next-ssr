import Head from 'next/head';

export default function SeoHead({
  title = '盈动资本 - 只投我们想要的世界！',
  keywords = '专注早期，致力于寻找并帮助那些 心怀崇高而热切愿望，有企业家精神的创业者开创伟大事业我们已经在科技创新、企业服务和消费升级等领域投资了150+优秀的创业公司，有一批企业已经成长为行业的领导者',
  description = '专注早期，致力于寻找并帮助那些 心怀崇高而热切愿望，有企业家精神的创业者开创伟大事业我们已经在科技创新、企业服务和消费升级等领域投资了150+优秀的创业公司，有一批企业已经成长为行业的领导者',
  children,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/next-ssr/icon.png" />

      <meta name="renderer" content="webkit" />
      <meta name="author" content="jeodiong@hotmail.com" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="Cache-Control" content="no-siteapp" />
      <meta http-equiv="Window-target" content="_top" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="jeodiong" />
      {children}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=GTM-MCP229B`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-MCP229B', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}
