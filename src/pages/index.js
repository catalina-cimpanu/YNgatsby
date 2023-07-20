import * as React from "react";
import Layout from "../components/Layout";
import HeroNew from "../components/hero/HeroNew";
import Description from "../components/Description";
import { styled } from "styled-components";
import Features from "../components/features/Features";
import FeaturesExperiment from "../components/features/FeaturesExperiment";
import Blob from "../images/blobs/Blob1.inline.svg";
import Blob2 from "../images/blobs/Blob2.inline.svg";
import Blob3 from "../images/blobs/Blob3.inline.svg";
import Blob4 from "../images/blobs/Blob4.inline.svg";

const HomePage = () => {
  return (
    <Layout>
      <HeroNew />
      <Description />
      <Features />
      <FeaturesExperiment />
      <p id="first">
        Edit <code>src/pages/index.js</code> to see this page update in
        real-time. 😎
      </p>
      <p>
        lorem ipsum lorem lorem lorem ipsum lorem lorem lorem ipsum generate
        lorem ipsum text lorem10 ipsum lorem lorem ipsum lorem lorem lorem ipsum
        generate lorem ipsum text lorem500 ipsum lorem lorem ipsum lorem lorem
        lorem ipsum generate lorem ipsum text lorem10 lorem ipsum lorem lorem
        lorem ipsum generate lorem ipsum text Ut nulla reprehenderit laborum
        occaecat anim in nostrud adipisicing mollit occaecat nulla et ex. Aute
        deserunt incididunt elit occaecat voluptate. Anim aliqua incididunt esse
        nostrud consectetur commodo incididunt ut dolor voluptate do tempor.
        Proident culpa dolore irure veniam laborum in enim ex labore cillum
        irure consectetur laboris eu. Excepteur reprehenderit veniam laboris
        adipisicing voluptate veniam aliqua ex ea consectetur consectetur in
        eiusmod id. Minim consectetur laborum culpa fugiat mollit non nostrud in
        cillum. Velit nisi dolor non proident aliqua exercitation aliqua est et
        id aliquip ipsum. Nostrud aute nulla pariatur id non eu voluptate ea sit
        occaecat. Id nulla excepteur qui nisi ad et ad mollit Lorem pariatur.
        Sit eiusmod tempor aliqua proident nisi. In enim velit eu ipsum mollit
        anim deserunt cillum mollit ullamco. Duis esse pariatur pariatur cillum
        est. Amet amet esse duis culpa proident. Exercitation quis eiusmod sit
        sint labore. Eu veniam qui tempor cupidatat consectetur. Lorem sit
        proident nostrud voluptate. Voluptate magna occaecat velit culpa eiusmod
        dolore aute laborum cupidatat veniam pariatur fugiat. Reprehenderit
        proident cillum aliqua culpa consequat dolor pariatur et qui veniam enim
        anim proident. Consequat eu deserunt duis velit ullamco sint
        reprehenderit ipsum nulla deserunt sit.
      </p>{" "}
      <p>
        Nulla mollit nisi officia sit cupidatat id commodo eiusmod laborum in
        aliqua aute. Non elit sint adipisicing in ex ex ad amet ex quis. Officia
        nostrud commodo ex duis incididunt id occaecat. Id dolor labore proident
        ea magna dolore aute ad qui et dolore ad nisi. Sunt occaecat ex est eu
        in laborum enim. Ipsum id laborum ullamco et id magna reprehenderit
        occaecat nostrud excepteur officia sint. Nisi amet anim id esse aliquip
        commodo adipisicing duis anim Lorem eu labore nostrud voluptate. Quis
        labore esse aliqua laborum dolore proident est. Laboris fugiat nostrud
        irure officia ea Lorem nisi eiusmod quis aliquip mollit consequat aliqua
        mollit. Laboris esse dolore mollit laborum irure mollit sint cupidatat
        magna anim ex. Officia culpa do esse elit qui officia. Eiusmod cillum ea
        ea et nisi veniam veniam aute pariatur et tempor pariatur fugiat
        pariatur. Cillum sit id cupidatat dolor. Non sit Lorem irure qui
        exercitation amet dolore duis voluptate ipsum. Fugiat in consectetur
        velit quis laborum veniam minim adipisicing consectetur dolore. Officia
        duis ex veniam cupidatat fugiat incididunt id anim adipisicing quis amet
        consectetur. Lorem proident mollit sunt duis pariatur anim non culpa in
        occaecat Lorem tempor culpa dolor. Fugiat pariatur commodo dolor mollit
        ullamco cupidatat eiusmod consequat veniam incididunt. Cupidatat eu
        cupidatat commodo eu. Ullamco dolore non incididunt id incididunt
        officia duis. Et mollit irure culpa ullamco minim tempor.
      </p>
      <p id="down">
        Dolor nulla tempor deserunt ex pariatur aliquip do incididunt amet dolor
        sint. Non esse anim reprehenderit aliqua consectetur sunt incididunt.
        Veniam sint laborum deserunt nostrud proident consectetur ad aliquip
        anim et. Deserunt labore ullamco anim qui in mollit nisi anim. Nisi
        nulla commodo ex laborum consequat culpa qui deserunt nulla quis culpa
        qui ullamco ullamco. Ipsum adipisicing tempor et ex fugiat eu laborum
        veniam reprehenderit commodo dolor. Sint ullamco voluptate consequat
        mollit magna dolore enim. Sit excepteur voluptate deserunt ullamco.
        Nostrud magna laboris excepteur eu sunt eu Lorem culpa nisi consectetur.
        Est ex in quis qui nulla occaecat minim cillum veniam. Et qui voluptate
        nisi officia excepteur eiusmod eu. Officia deserunt cupidatat magna amet
        nostrud enim aliquip cupidatat. Velit dolore amet incididunt enim labore
        sunt veniam id officia. Ex cupidatat minim anim cupidatat enim
        adipisicing eiusmod dolor ex dolore pariatur. Non nulla culpa cillum
        dolor culpa ea id. Velit exercitation aute culpa adipisicing qui Lorem
        sit adipisicing et mollit nulla officia. Amet pariatur pariatur culpa
        Lorem. Officia sunt et consequat officia enim consectetur incididunt non
        veniam. Duis mollit duis reprehenderit irure dolore exercitation nulla
        duis est labore ex mollit do sint. Minim nulla excepteur magna proident
        id velit. Quis officia anim consectetur et tempor proident irure aliquip
        irure ex consectetur eu mollit. Esse aliqua ut nulla reprehenderit.
        Voluptate magna ea velit consequat. Velit nostrud cupidatat mollit
        consectetur.
      </p>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Home | Young Neuros</title>;
