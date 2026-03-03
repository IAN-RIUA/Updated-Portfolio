import { Brain, BarChart3, Filter, PieChart } from "lucide-react";

export type ServiceItem = {
  id: string;
  icon: typeof BarChart3;
  title: string;
  summary: string;
  details: string;
  longDescription: string[];
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    id: "data-analysis-visualization",
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    summary: "Transforming raw datasets into clear, actionable insights through exploratory analysis and visual storytelling.",
    details:
      "I use Python, Excel, and SQL to clean data, identify patterns, and communicate findings through dashboards and charts that support better decisions.",
    longDescription: [
      "This service focuses on turning unstructured or underused data into practical business intelligence. I start by understanding the business objective, profiling the data, and defining meaningful metrics that answer real operational questions.",
      "I then perform exploratory analysis to reveal patterns, anomalies, and trends across time, segments, and behaviors. Findings are translated into visuals that are straightforward for both technical and non-technical stakeholders.",
      "The final output includes concise insights, recommended actions, and visual assets that can support reporting, presentations, or decision meetings.",
    ],
    highlights: [
      "Exploratory Data Analysis (EDA)",
      "Trend and anomaly detection",
      "Dashboard-ready visual outputs",
      "Action-focused insight summaries",
    ],
  },
  {
    id: "data-cleaning-preparation",
    icon: Filter,
    title: "Data Cleaning & Preparation (Data Wrangling)",
    summary: "Preparing and structuring raw data for analysis by cleaning, transforming, and validating datasets.",
    details:
      "This includes handling missing values, removing inconsistencies, standardizing formats, and creating reliable datasets ready for reporting and modeling.",
    longDescription: [
      "Data quality is the foundation of every strong analysis. In this service, I audit dataset health and fix issues such as duplicates, invalid values, mixed data types, and inconsistent naming conventions.",
      "I also standardize fields, engineer useful attributes, and document the transformation logic so the process remains transparent and repeatable.",
      "The result is a trusted dataset that downstream teams can confidently use for reporting, business intelligence, and machine learning workflows.",
    ],
    highlights: [
      "Missing-value and outlier treatment",
      "Schema and data-type standardization",
      "Data transformation pipelines",
      "Validation and quality checks",
    ],
  },
  {
    id: "business-intelligence-reporting",
    icon: PieChart,
    title: "Business Intelligence & Reporting",
    summary: "Translating data into strategic insights and performance dashboards for KPI tracking.",
    details:
      "I build practical reports that help teams measure outcomes, monitor trends, and align business actions with data-backed priorities.",
    longDescription: [
      "This service converts key business metrics into clear reporting frameworks. I define KPI structures, connect them to available data sources, and design readable dashboards for recurring use.",
      "Reports are structured for quick interpretation: what changed, why it changed, and what to do next. This reduces guesswork and improves decision speed across teams.",
      "I focus on maintainable reporting outputs that can be updated regularly without rework.",
    ],
    highlights: [
      "KPI framework design",
      "Dashboard layout and metric storytelling",
      "Performance monitoring views",
      "Decision-support reporting",
    ],
  },
  {
    id: "machine-learning-predictive-analytics",
    icon: Brain,
    title: "Machine Learning & Predictive Analytics (Introductory Level)",
    summary: "Exploring predictive models to uncover trends and forecast outcomes.",
    details:
      "Using Python and scikit-learn, I work with introductory regression and classification models to test ideas and generate actionable predictions.",
    longDescription: [
      "This service introduces machine learning methods where forecasting or classification can add value. I begin by framing the prediction problem and preparing suitable training features.",
      "I build baseline models, evaluate performance with appropriate metrics, and compare alternatives to identify practical model behavior.",
      "Outputs include model results, interpretation notes, and next-step recommendations for deeper model improvement or production readiness.",
    ],
    highlights: [
      "Baseline model development",
      "Regression and classification workflows",
      "Model evaluation and comparison",
      "Practical recommendation notes",
    ],
  },
];

