import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ContactSection = () => {
  return (
    <Section>
      <p>
        Write us an email at{" "}
        <a className="email" href="mailto:email@youngneuros.com">
          email@youngneuros.com
        </a>
        or directly on our <Link to="/legal/contact">contact page</Link>.
      </p>
    </Section>
  );
};
const Section = styled.div`
  scroll-behavior: smooth;
  padding: 0 8% 4rem; /* somehow the margin from the title doesn't show if i don't put that 1px... dunno.. also the top margin doesn't work if i put a min height */
  display: grid;
  place-items: center;
  text-align: center;
  .email {
    :focus-visible {
      border: none;
    }
  }
`;

export default ContactSection;
