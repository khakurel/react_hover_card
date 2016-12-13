import webpack from 'webpack'
import path from 'path'
import {CheckerPlugin} from 'awesome-typescript-loader'

const {NODE_ENV} = process.env;

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new CheckerPlugin()
];

const filename = `react-hover-card${NODE_ENV === 'production' ? '.min' : ''}.js`;

NODE_ENV === 'production' && plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            warnings: false
        }
    })
);

export default {
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: 'pre', test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    entry: [
        './src/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename,
        library: 'ReactHoverCard',
        libraryTarget: 'umd'
    },

    plugins
}
