import Feed from "@components/Feed"

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
   <h1 className="head_text text-center">Discover & Share
  <br className="max-md:hidden" />
  <span className="orange_gradient block">AI-Powered Prompts</span>
</h1>
    <p className="desc text-center">
        Promt-heaven is an open source project that uses GPT-3 to generate prompts for writers, artists, and anyone else who needs a creative boost.
    </p>

    <Feed />
   </section>
  )
}

export default Home