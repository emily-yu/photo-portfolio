import Container from "@/app/components/container";
// import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/components/page/intro";
// import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/api";

// import RiaanOpen from "@/app/_components/events/riaanopen";

export default function Index() {
  // const allPosts = getAllPosts();

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
      </Container>
    </main>
  );
}
