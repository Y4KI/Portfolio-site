import styled from "styled-components";
import { MainColors } from "./MainColors";

export const TimelineWr = styled.div`
  .wrapper {
    padding: 0 12px;
    position: relative;
    .center-line {
      position: absolute;
      height: 100%;
      width: 4px;
      background: #fff;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
    }
    .row {
      display: flex;
      section {
        background: ${MainColors.blue};
        border-radius: 5px;
        width: calc(50% - 40px);
        padding: 20px;
        position: relative;
        .details,
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: ${MainColors.dark_1};
        }
        .details {
          font-size: 22px;
          font-weight: 600;
        }
        .bottom {
          a {
            text-decoration: none;
            background: ${MainColors.orange_2};
            color: #fff;
            padding: 7px 15px;
            border-radius: 5px;
            font-size: 17px;
            font-weight: 400;
            transition: all 0.3s ease;
            &:hover {
              transform: scale(0.97);
            }
          }
        }
        p {
          margin: 10px 0 17px 0;
          color: ${MainColors.dark_1};
        }
        &::before {
          position: absolute;
          content: "";
          height: 15px;
          width: 15px;
          background: ${MainColors.yellow};
          top: 28px;
          z-index: -1;
          transform: rotate(45deg);
        }
      }
    }
    .row-1 {
      justify-content: flex-start;
      section {
        .icon {
          top: 15px;
          right: -60px;
        }
        &::before {
          right: -7px;
        }
      }
    }
    .row-2 {
      justify-content: flex-end;
      section {
        .icon {
          top: 15px;
          left: -60px;
        }
        &::before {
          left: -7px;
        }
      }
    }
  }
  .row section .icon,
  .center-line .scroll-icon {
    position: absolute;
    background: #fff;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 17px;
    box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .center-line .scroll-icon {
    bottom: 0px;
    left: 50%;
    font-size: 25px;
    transform: translateX(-50%);
  }
  @media (max-width: 790px) {
    .wrapper .center-line {
      left: 40px;
    }
    .wrapper .row {
      margin: 30px 0 3px 60px;
    }
    .wrapper .row section {
      width: 100%;
    }
    .row-1 section::before {
      left: -7px;
    }
    .row-1 section .icon {
      left: -60px;
    }
  }
  @media (max-width: 440px) {
    .wrapper .center-line,
    .row section::before,
    .row section .icon {
      display: none;
    }
    .wrapper .row {
      margin: 10px 0;
    }
  }
`;
