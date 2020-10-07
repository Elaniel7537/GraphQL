import React, { useEffect, useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Head from "next/head";
// antd
import { Layout } from "antd";
// components
import Menu from "@layouts/sider/menu.jsx";

import "@styles/self-styles.less";

const { Header, Content, Sider, Footer } = Layout;

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
  // aqui utilizamos los Hooks, para alterar la funcionalidad del menu
  const [collapsed, setCollapsed] = useState(false);

  // para efecto de toogle
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    // setCollapsed(collapsed);
  };

  useEffect(() => {
    console.log("Hacer peticion Auth");
  }, []);

  return (
    <>
      {/* cabezera del HTML  */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>GraphQL</title>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
      </Head>
      <ApolloProvider client={client}>
        <Layout className="site-layout">
          {/* contenido de la pagina */}
          <Sider
            collapsible
            collapsed={true}
            // collapsed={collapsed}
            onCollapse={onCollapse}
          >
            <Menu />
          </Sider>
          <Layout>
            <Header style={{ padding: 0 }}>Consultas GraphQL</Header>
            <Content className="site-layout-contend">
              <Layout className="site-layout-contend-bg">
                <Component {...pageProps} />
              </Layout>
              <Footer style={{ textAlign: "center" }}>
                Daniel Elver - GraphQL 2020 C.A
              </Footer>
            </Content>
          </Layout>
        </Layout>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
