import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const HelpForm = ({ data }) => {
  const { description, items } = data;
  const itemsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setStartIndex(0);
    // setEndIndex(3);
  }, [items]);

  const handlePageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setStartIndex(newOffset);
  };

  return (
    <>
      <div className="HelpForm__Container">
        <p className="HelpForm__Description">{description}</p>

        <div className="HelpForm__Content">
          {items &&
            currentItems.map((item) => (
              <div className="HelpForm__ContentText" key={item.id}>
                <div className="HelpForm__TextContainer">
                  <p>{item.name}</p>
                  <p>{item.para}</p>
                </div>

                <p className="HelpForm__TextDetails">{item.things}</p>
              </div>
            ))}
        </div>
      </div>

      <ReactPaginate
        className="Pagination__Container"
        pageClassName="Pagination__Page"
        activeClassName="Pagination__Page--active"
        pageCount={totalPages}
        onPageChange={handlePageChange}
        renderOnZeroPageCount={null}
        previousLabel={null}
        nextLabel={null}
      />
    </>
  );
};

export default HelpForm;
