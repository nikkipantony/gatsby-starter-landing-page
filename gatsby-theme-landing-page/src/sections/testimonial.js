import React from "react";
import * as styles from "./testimonial.module.css";
import Section from "../components/section";
import Heading from "../components/heading";
import MarkdownText from "../components/markdown-text";
import Divider from "../components/divider";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Testimonial({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Heading secondary>{secondaryHeading}</Heading>
      {content.map((item) => (
        <TestimonialContent {...item} />
      ))}
    </Section>
  );
}

function TestimonialContent({ primaryText, secondaryText, avatar }) {
  return primaryText ? (
    <div className={styles.testimonialContainer}>
      <div className={styles.quote}>
        <MarkdownText {...primaryText} />
      </div>
      <Divider />
      <div className={styles.author}>
        <div>
          <div className={styles.avatar}>
            <GatsbyImage image={getImage(avatar)} />
          </div>
        </div>
        <MarkdownText className={styles.authorInfo} {...secondaryText} />
      </div>
    </div>
  ) : null;
}