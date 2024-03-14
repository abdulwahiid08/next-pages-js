import { useRouter } from "next/router";

const ShopViews = () => {
  const { query } = useRouter();

  return (
    <div>
      Shop Page
      <div>Halaman Menggunakan multi router ([[...slug]])</div>
      <div>
        <h3>Sluq 1: {query.sluq && query.sluq[0]} -</h3>
        <h3>Sluq 2: {query.sluq && query.sluq[1]}</h3>
        <div>
          <p>Looping Sluq</p>
          {query.sluq &&
            query.sluq.map((val) => (
              <>
                <h3>{val}</h3>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopViews;
