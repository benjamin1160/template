import siteConfig from "@/site.config";
import Hero from "@/components/Hero";
import BigNumbers from "@/components/BigNumbers";
import Pain from "@/components/Pain";
import HowItWorks from "@/components/HowItWorks";
import ValueStack from "@/components/ValueStack";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import SocialProofWall from "@/components/SocialProofWall";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero hero={siteConfig.hero} />
      {siteConfig.bigNumbers?.enabled && (
        <BigNumbers bigNumbers={siteConfig.bigNumbers} />
      )}
      {siteConfig.pain?.enabled && <Pain pain={siteConfig.pain} />}
      {siteConfig.plan?.enabled && <HowItWorks plan={siteConfig.plan} />}
      {siteConfig.valueStack?.enabled && (
        <ValueStack valueStack={siteConfig.valueStack} />
      )}
      {siteConfig.guarantee?.enabled && (
        <GuaranteeBadge guarantee={siteConfig.guarantee} />
      )}
      {siteConfig.socialProof?.enabled && (
        <SocialProofWall socialProof={siteConfig.socialProof} />
      )}
      {siteConfig.faq?.enabled && <FAQ faq={siteConfig.faq} />}
    </>
  );
}
