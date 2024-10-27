#!/usr/bin/env node
import helloName from '../src/cli.js';
import brainEvenGame from '../src/braineven.js';

const userName  = helloName();
brainEvenGame(userName);