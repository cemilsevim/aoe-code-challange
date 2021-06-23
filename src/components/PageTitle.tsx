import React from "react";

function PageTitle({ children }: any): JSX.Element {
    return (
        <h3 className="page-title text-center py-3">
            { children }
        </h3>
    );
}

export default PageTitle;