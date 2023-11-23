const Page = async ({ params }: { params: { [key: string]: string } }) => {
  console.log(params);

  return (
    <main>
      <div>
        <h1 className="text-4xl text-white">{params.id}</h1>
      </div>
    </main>
  );
};

export default Page;
