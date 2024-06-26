<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit290810dae2967f03b30f6b34f2b2efaa
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit290810dae2967f03b30f6b34f2b2efaa', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit290810dae2967f03b30f6b34f2b2efaa', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit290810dae2967f03b30f6b34f2b2efaa::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
