import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Chart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    console.log("D3 Data Received:", data);
    if (!data || data.length === 0) {
      console.warn("No data available for D3 chart.");
      return;
    }

    // Clear the previous SVG content before rendering
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 500;
    const height = 300;
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Scale
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, width])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.amount)])
      .range([height, 0]);

    // Draw bars
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.category))
      .attr("y", d => yScale(d.amount))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.amount))
      .attr("fill", "steelblue");

    // Add X Axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    // Add Y Axis
    svg.append("g")
      .call(d3.axisLeft(yScale));

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default D3Chart;
