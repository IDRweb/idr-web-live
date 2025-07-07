import React, { useRef } from "react";
import { TableVirtuoso, TableVirtuosoHandle } from "react-virtuoso";
import { useTranslations } from "next-intl";

interface TableRow {
  codi: string;
  desc: string;
}

const Table: React.FC = () => {
  const t = useTranslations("table");
  
  // Get all the codes from the translation data
  const codes = [
    "020101", "020201", "020203", "020204", "020301", "020304", "020305", "020403",
    "020501", "020502", "020601", "020603", "020704", "020705", "030305", "030311",
    "040104", "040105", "040106", "040107", "040220", "060603", "070112", "070212",
    "070312", "070512", "070612", "070712", "080112", "080120", "080308", "110112",
    "161002", "161004", "170506", "190206", "190603", "190605", "190703", "190805",
    "190809", "190812", "190814", "190902", "200304", "200306"
  ];

  const tableData: TableRow[] = codes.map(codi => ({
    codi,
    desc: t(`data.${codi}`)
  }));

  const virtuosoRef = useRef<TableVirtuosoHandle>(null);

  const scrollUp = () => {
    virtuosoRef.current?.scrollBy({ top: -100 }); 
  };

  const scrollDown = () => {
    virtuosoRef.current?.scrollBy({ top: 100 }); 
  };

  const handleMouseDown = (direction: "up" | "down") => {
    const scrollFn = direction === "up" ? scrollUp : scrollDown;
    scrollFn();
    const interval = setInterval(scrollFn, 100);
    const stopScrolling = () => {
      clearInterval(interval);
      document.removeEventListener("mouseup", stopScrolling);
      document.removeEventListener("mouseleave", stopScrolling);
    };
    document.addEventListener("mouseup", stopScrolling);
    document.addEventListener("mouseleave", stopScrolling);
  };

  return (
    <div className="table-container">
      {/* <div className="table-top"></div> */}
      <div className="scroll-buttons">
        <button
          className="scroll-button scroll-up"
          onMouseDown={() => handleMouseDown("up")}
          aria-label="Scroll up"
        >
          ↑
        </button>
        <button
          className="scroll-button scroll-down"
          onMouseDown={() => handleMouseDown("down")}
          aria-label="Scroll down"
        >
          ↓
        </button>
      </div>

      <TableVirtuoso
        ref={virtuosoRef}
        data={tableData}
        className="app-table"
        style={{ height: 600 }}
        fixedHeaderContent={() => (
          <tr className="table-header">
            <th className="header-cell">
              <div className="table-header-content">
                <p>{t("header.code")}</p>
              </div>
            </th>
            <th className="header-cell">
              <div className="table-header-content">
                <p>{t("header.description")}</p>
              </div>
            </th>
          </tr>
        )}
        itemContent={(index, item) => (
          <tr className="table-row">
            <td className="table-cell">
              <span className="CodeTag">{item.codi}</span>
            </td>
            <td className="table-cell">{item.desc}</td>
          </tr>
        )}
      />
    </div>
  );
};

export default Table;