import "./pageheading.scss";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BsArrowLeft } from "react-icons/bs";

function PageHeading(props) {
  const { heading, el, routing, backHeading, backUrl } = props;
  return (
    <div className="ks-page-heading">
      {routing ? (
        <>
          <div>
            <div className="breadcrum">
              {routing.map((route, idx) => (
                <>
                  <Link to={route.route} className={route.active && "active"}>
                    {route.name}
                  </Link>
                  {idx < routing.length - 1 && (
                    <LiaGreaterThanSolid size={15} />
                  )}
                </>
              ))}
            </div>
            <div className="back-heading">
              <Link to={backUrl}><BsArrowLeft size={30}/></Link>
              <h3 className="container-main-text">{backHeading}</h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="container-main-text">{heading}</h3>
          {el}
        </>
      )}
    </div>
  );
}

export default PageHeading;
