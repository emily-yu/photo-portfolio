import Container from "app/components/container";
// import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div style={{padding: "40px", width: "100%", textAlign: "end"}}>
        <p>emilyyu1030[at]gmail[dot]com</p>
        <p>Instagram @ emilyyu1031</p>
        </div>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className="mx-3 hover:bg-white hover:text-black border  text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
