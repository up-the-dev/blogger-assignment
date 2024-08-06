import { Config } from "./config";
import App from "./app";
import logger from "./config/logger";

const startServer = () => {
    const PORT = Config.PORT;

    try {
        App.listen(PORT, () => {
            logger.info("server listening at " + PORT);
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            logger.error("server init failed" + error.message);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};

startServer();
