import SPWMini from "spwmini/client";

const APP_ID = "DpxcJ/9UHM4i17AUWW3A1TfU2DcDNNN4";

export const spw = new SPWMini(APP_ID, {
  autoinit: false,
});

export const initSPWorlds = () => {
  spw.initialize();

  spw.on("ready", () => {
    console.log("SPWorlds App is ready!");
    console.log("Current user:", spw.user);
  });

  spw.on("initError", (message) => {
    console.error(`SPWorlds initialization error: ${message}`);
  });

  spw.on("paymentResponse", async () => {
    console.log("Payment successful");
  });

  spw.on("paymentError", (err) => {
    console.error(`Payment error: ${err}`);
  });
};

export const validateUser = async () => {
  try {
    const response = await fetch("/api/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: spw.user }),
    });
    const data = await response.json();
    return data.valid;
  } catch (error) {
    console.error("User validation error:", error);
    return false;
  }
};
